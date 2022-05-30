import React, {useEffect, useState} from 'react'
import SingleGroupBox from './SingleGroupBox'
import GroupListWrapper from '../../../../layouts/user/group/GroupListWrapper'
import SearchBar from '../../../../searchbar/SearchBar'
import StudentModalButtonWrapper from '../../../../layouts/student/StudentModalButtonWrapper'
import CreateGroupModal from '../../../../modals/student/CreateGroupModal'
import axios from 'axios'
import {useDebouncedValue, useDidUpdate, useLocalStorage} from '@mantine/hooks'
import {useRouter} from 'next/router'

const placeholder = 'Group Search'

const GroupsList = () => {
    const [studentGroups, setStudentGroups] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const [searchTerm, setSearchTerm] = useState('')
    const [debounced] = useDebouncedValue(searchTerm, 200)

    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    const openCreateGroupModal = () => {
        setOpenModal(true)
    }

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
    useDidUpdate(() => {
        axios
            .get('/api/users/is-in-a-group', {
                params: {
                    userId: credentials._id,
                },
            })
            .then(async (res) => {
                if (res.data.isInAGroup) {
                    await router.push('/student/finalize-group')
                }
            })
    }, [])

    const changeSearchValue = (value) => {
        setSearchTerm(value)
    }

    const requestForJoinOnGroupHandler = async (groupId) => {
        console.log(groupId)

        //{userId, groupId}
        await axios
            .post('/api/users/request-for-join-group', {
                userId: credentials._id,
                groupId: groupId,
            })
            .then((res) => {
                console.log(res.data)
            })
    }

    return (
        <StudentModalButtonWrapper
            btnName={'Create Group'}
            btnFunction={openCreateGroupModal}
        >
            <CreateGroupModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <GroupListWrapper>
                <SearchBar
                    value={searchTerm}
                    changeSearchValue={changeSearchValue}
                    placeholder={placeholder}
                />
                <div>
                    {studentGroups.map((studentGroup) => (
                        <SingleGroupBox
                            key={studentGroup.id}
                            groupId={studentGroup.id}
                            requestForJoinOnGroupHandler={
                                requestForJoinOnGroupHandler
                            }
                            groupName={studentGroup.groupName}
                            groupLeader={studentGroup.groupLeader}
                            groupLeaderRegNo={studentGroup.groupLeaderRegNo}
                            currentNo={studentGroup.currentNo}
                        />
                    ))}
                </div>
            </GroupListWrapper>
        </StudentModalButtonWrapper>
    )
}

export default GroupsList
