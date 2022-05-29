import React, {useEffect, useState} from 'react'
import FinalizeGroupWrapper from '../../../../layouts/finalize-group/FinalizeGroupWrapper'
import SingleRequestBox from './SingleRequestBox'
import StudentModalButtonWrapper from '../../../../layouts/student/StudentModalButtonWrapper'
import {useRouter} from 'next/router'
import {useDidUpdate} from "@mantine/hooks";
import axios from "axios";

const requestUsersStaticData = [
    {
        id: 1,
        userName: 'Anne Wotson',
        userRegNo: 'IT20809745',
        acceptedStatus: true,
    },
    {
        id: 2,
        userName: 'neha nichola',
        userRegNo: 'IT10309416',
        acceptedStatus: false,
    },
    {
        id: 3,
        userName: 'Mary jonson',
        userRegNo: 'IT20809796',
        acceptedStatus: true,
    },
    {
        id: 4,
        userName: 'Peter Pan',
        userRegNo: 'IT10839756',
        acceptedStatus: false,
    },
    {
        id: 5,
        userName: 'Yash Stevan',
        userRegNo: 'IT20409778',
        acceptedStatus: false,
    },
    {
        id: 6,
        userName: 'Bob cary',
        userRegNo: 'IT10209796',
        acceptedStatus: false,
    },
]

const RequestList = ({navigateFunc, groupLeaderID, groupTopic, groupMemberArray}) => {
    const [requestList, setRequestList] = useState(requestUsersStaticData)

    const [groupMembersWithDetails, setGroupMembersWithDetails] = useState([]);

    const submitGroupData = () => {

    }

    useEffect(() => {
        axios.all(groupMemberArray.map((singleGroupMember) => {
            if (groupLeaderID === singleGroupMember._id) {
                console.log(singleGroupMember);
            }


            return axios.get('/api/users/get-user-data-from-id', {
                params: {
                    userId: singleGroupMember.userId
                }
            })
        })).then((...res) => {
            const groupMembersWithDetailsX = []

            res[0].map((singleMember) => {


                groupMembersWithDetailsX.push(singleMember.data)
            })

            return groupMembersWithDetailsX
        }).then((groupMembers) => {
            setGroupMembersWithDetails(groupMembers)
        })
    }, [])


    return (
        <div>
            <StudentModalButtonWrapper
                btnName={'Check Group List'}
                btnFunction={navigateFunc}
            >
                <FinalizeGroupWrapper
                    groupTopic={groupTopic}
                    groupLeader={groupLeaderID}
                    btnFunction={submitGroupData}>
                    <div>
                        {requestList.map((request) => (
                            <SingleRequestBox
                                key={request.id}
                                userName={request.userName}
                                userRegNo={request.userRegNo}
                                acceptedStatus={request.acceptedStatus}
                            />
                        ))}
                    </div>
                </FinalizeGroupWrapper>
            </StudentModalButtonWrapper>
        </div>
    )
}

export default RequestList
