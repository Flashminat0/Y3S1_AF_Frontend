import React, {useEffect, useState} from 'react'
import FinalizeGroupWrapper from '../../../../layouts/finalize-group/FinalizeGroupWrapper'
import SingleRequestBox from './SingleRequestBox'
import StudentModalButtonWrapper from '../../../../layouts/student/StudentModalButtonWrapper'
import {useRouter} from 'next/router'
import {useDidUpdate, useForceUpdate, useLocalStorage} from '@mantine/hooks'
import axios from 'axios'

const RequestList = ({
    navigateFunc,
    groupLeaderID,
    groupTopic,
    groupMemberArray,
    groupId,
}) => {
    const [groupMembersWithDetails, setGroupMembersWithDetails] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    const submitGroupData = () => {}

    const [trigger, setTrigger] = useState(1)
    useEffect(() => {
        fetchMembersOfGroup()
    }, [groupLeaderID, trigger])

    const fetchMembersOfGroup = () => {
        axios
            .all(
                groupMemberArray.map((singleGroupMember) => {
                    return axios.get('/api/users/get-user-data-from-id', {
                        params: {
                            userId: singleGroupMember.userId,
                        },
                    })
                })
            )
            .then((...res) => {
                const groupMembersWithDetailsX = []

                res[0].map((singleMember, index) => {
                    groupMembersWithDetailsX.push({
                        ...singleMember.data,
                        status: groupMemberArray[index].status,
                    })
                })

                return groupMembersWithDetailsX
            })
            .then((groupMembers) => {
                setGroupMembersWithDetails(groupMembers)

                setIsLoaded(groupMembers.length > 0)
            })
    }

    const approveUser = async (id) => {
        await axios
            .post('/api/users/approve-to-group', {
                groupID: groupId,
                userId: id,
            })
            .then((res) => {
                setTrigger(trigger + 1)
            })
    }

    const rejectUser = async (id) => {
        await axios
            .delete('/api/users/reject-from-group', {
                params: {
                    groupID: groupId,
                    userId: id,
                },
            })
            .then((res) => {
                setTrigger(trigger + 1)
            })
    }

    return (
        <>
            {groupMembersWithDetails && (
                <>
                    <StudentModalButtonWrapper
                        btnName={'Go to topic submission '}
                        btnFunction={navigateFunc}
                        groupId={groupId}
                    >
                        <FinalizeGroupWrapper
                            groupTopic={groupTopic}
                            groupLeader={groupLeaderID}
                            btnFunction={submitGroupData}
                        >
                            {isLoaded && (
                                <>
                                    <div>
                                        {groupMembersWithDetails.map(
                                            (singleStudent) => (
                                                <SingleRequestBox
                                                    key={singleStudent._id}
                                                    userName={singleStudent.name
                                                        .substring(
                                                            0,
                                                            singleStudent.name.lastIndexOf(
                                                                ' '
                                                            )
                                                        )
                                                        .toString()
                                                        .toUpperCase()}
                                                    userRegNo={singleStudent.name
                                                        .substring(
                                                            singleStudent.name.lastIndexOf(
                                                                ' '
                                                            ) + 1,
                                                            singleStudent.name
                                                                .length
                                                        )
                                                        .toString()
                                                        .toUpperCase()}
                                                    acceptedStatus={
                                                        singleStudent.status
                                                    }
                                                    accessToActions={
                                                        credentials._id ===
                                                        groupLeaderID
                                                    }
                                                    userId={singleStudent._id}
                                                    groupLeader={groupLeaderID}
                                                    approveUser={approveUser}
                                                    rejectUser={rejectUser}
                                                />
                                            )
                                        )}
                                    </div>
                                </>
                            )}
                        </FinalizeGroupWrapper>
                    </StudentModalButtonWrapper>
                </>
            )}
        </>
    )
}

export default RequestList
