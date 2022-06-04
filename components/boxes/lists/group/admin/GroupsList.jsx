import React, {useState} from 'react'
import SingleGroupBox from './SingleGroupBox'
import GroupListWrapper from '../../../../layouts/user/group/GroupListWrapper'
import SearchBar from '../../../../searchbar/SearchBar'
import AdminModalButtonWrapper from '../../../../layouts/admin/AdminModalButtonWrapper'
import {useDebouncedValue, useDidUpdate, useLocalStorage} from '@mantine/hooks'
import axios from 'axios'
import {useRouter} from 'next/router'
const placeholder = 'Group Search'

const GroupsList = ({navigateFunc}) => {
    const [studentGroups, setStudentGroups] = useState(null)

    const [searchTerm, setSearchTerm] = useState('')
    const [debounced] = useDebouncedValue(searchTerm, 200)

    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    useDidUpdate(() => {
        if (debounced === '') {
            //limited to 5
            axios.get('/api/users/get-all-groups').then(async (res) => {
                setStudentGroups([])

                for (const group of res.data.groups) {
                    const groupId = group._id
                    const groupName = group.name
                    const memberCount = group.members.length

                    await axios
                        .get('/api/users/get-user-data-from-id', {
                            params: {
                                userId: group.leaderId,
                            },
                        })
                        .then((res) => {
                            const leaderName = res.data.name.toString()
                            const newGroup = {
                                id: groupId,
                                groupName: groupName,
                                groupLeader: leaderName
                                    .substring(0, leaderName.lastIndexOf(' '))
                                    .toString()
                                    .toUpperCase(),
                                groupLeaderRegNo: leaderName
                                    .substring(
                                        leaderName.lastIndexOf(' ') + 1,
                                        leaderName.length
                                    )
                                    .toString()
                                    .toUpperCase(),
                                currentNo: memberCount,
                            }

                            setStudentGroups((prev) => {
                                return [...prev, newGroup]
                            })
                        })
                }
            })
        } else {
            setStudentGroups([])
            axios
                .get('/api/users/find-group', {
                    params: {
                        searchName: debounced,
                    },
                })
                .then(async (res) => {
                    for (const group of res.data) {
                        const groupId = group._id
                        const groupName = group.name
                        const memberCount = group.members.length

                        await axios
                            .get('/api/users/get-user-data-from-id', {
                                params: {
                                    userId: group.leaderId,
                                },
                            })
                            .then((res) => {
                                const leaderNameNew = res.data.name.toString()
                                const newGroup = {
                                    id: groupId,
                                    groupName: groupName,
                                    groupLeader: leaderNameNew
                                        .substring(
                                            0,
                                            leaderNameNew.lastIndexOf(' ')
                                        )
                                        .toString()
                                        .toUpperCase(),
                                    groupLeaderRegNo: leaderNameNew
                                        .substring(
                                            leaderNameNew.lastIndexOf(' ') + 1,
                                            leaderNameNew.length
                                        )
                                        .toString()
                                        .toUpperCase(),
                                    currentNo: memberCount,
                                }

                                setStudentGroups((prev) => {
                                    return [...prev, newGroup]
                                })
                            })
                    }
                })
        }
    }, [debounced])

    const router = useRouter()

    return (
        <>
            {studentGroups && (
                <>
                    <AdminModalButtonWrapper
                        btnName={'Check User List'}
                        btnFunction={navigateFunc}
                    >
                        <GroupListWrapper>
                            <SearchBar placeholder={placeholder} />
                            <div>
                                {studentGroups.map((studentGroup) => (
                                    <SingleGroupBox
                                        key={studentGroup.id}
                                        groupId={studentGroup.id}
                                        groupName={studentGroup.groupName}
                                        groupLeader={studentGroup.groupLeader}
                                        groupLeaderRegNo={
                                            studentGroup.groupLeaderRegNo
                                        }
                                        currentNo={studentGroup.currentNo}
                                    />
                                ))}
                            </div>
                        </GroupListWrapper>
                    </AdminModalButtonWrapper>
                </>
            )}
        </>
    )
}

export default GroupsList
