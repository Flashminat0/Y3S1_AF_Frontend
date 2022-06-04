import React, {useEffect, useState} from 'react'
import StudentSideBarWrapper from '../../components/layouts/student/StudentSideBarWrapper'
import RequestList from '../../components/boxes/lists/requests/student/RequestList'
import {useRouter} from 'next/router'
import {useDidUpdate, useLocalStorage} from '@mantine/hooks'
import axios from 'axios'

const FinalizeGroup = () => {
    const router = useRouter()

    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    const [leaderID, setLeaderID] = useState('')
    const [groupTopic, setGroupTopic] = useState('')
    const [groupMemberArray, setGroupMemberArray] = useState([])
    const [groupId, setGroupId] = useState('')

    const openHomePage = async () => {
        await router.push('/')
    }

    const openTopicSubmissionPage = async () => {
        await router.push('/student/topic-submission/')
    }

    useEffect(() => {
        axios
            .get('/api/users/is-in-a-group', {
                params: {
                    userId: credentials._id,
                },
            })
            .then(async (res) => {
                if (!res.data.isInAGroup) {
                    await router.push('/student/group-list')
                    return
                }
                return res.data.group
            })
            .then((userGroupData) => {
                if (!userGroupData) return

                setLeaderID(userGroupData.leaderId)
                setGroupTopic(userGroupData.name)
                setGroupMemberArray(userGroupData.members)
                setGroupId(userGroupData._id)
            })
    }, [])

    return (
        <StudentSideBarWrapper
            selectedPageIndex={1}
            navigateHome={openHomePage}
        >
            <RequestList
                credentials={credentials}
                groupId={groupId}
                groupMemberArray={groupMemberArray}
                groupTopic={groupTopic}
                groupLeaderID={leaderID}
                navigateFunc={openTopicSubmissionPage}
            />
        </StudentSideBarWrapper>
    )
}

export default FinalizeGroup
