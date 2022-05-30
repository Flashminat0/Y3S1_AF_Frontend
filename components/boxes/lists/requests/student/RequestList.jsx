import React, {useEffect, useState} from 'react'
import FinalizeGroupWrapper from '../../../../layouts/finalize-group/FinalizeGroupWrapper'
import SingleRequestBox from './SingleRequestBox'
import StudentModalButtonWrapper from '../../../../layouts/student/StudentModalButtonWrapper'
import axios from "axios";

const RequestList = ({navigateFunc, groupLeaderID, groupTopic, groupMemberArray, groupId , credentials}) => {
    const [groupMembersWithDetails, setGroupMembersWithDetails] = useState([]);


    const submitGroupData = () => {

    }

    const [trigger, setTrigger] = useState(1);
    useEffect(() => {
        fetchMembersOfGroup()
    }, [groupLeaderID, trigger])

    const fetchMembersOfGroup = () => {
        axios.all(groupMemberArray.map((singleGroupMember) => {
            return axios.get('/api/users/get-user-data-from-id', {
                params: {
                    userId: singleGroupMember.userId
                }
            })
        })).then((...res) => {
            const groupMembersWithDetailsX = []

            res[0].map((singleMember, index) => {
                groupMembersWithDetailsX.push({
                    ...singleMember.data,
                    status: groupMemberArray[index].status
                })
            })

            return groupMembersWithDetailsX
        }).then((groupMembers) => {
            setGroupMembersWithDetails(groupMembers)
        })
    }


    const approveUser = async (id) => {
        await axios.post('/api/users/approve-to-group', {
            groupID: groupId,
            userId: id
        }).then(() => {
            setTrigger(trigger + 1)
        })
    }

    const rejectUser = (id) => {
        console.log(id);
    }

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
                        {groupMembersWithDetails.map((singleStudent) => (
                            <SingleRequestBox
                                key={singleStudent._id}
                                userName={singleStudent.name.substring(0, singleStudent.name.lastIndexOf(' ')).toString().toUpperCase()}
                                userRegNo={singleStudent.name.substring(singleStudent.name.lastIndexOf(' ') + 1, singleStudent.name.length).toString().toUpperCase()}
                                acceptedStatus={singleStudent.status}
                                accessToActions={credentials._id === groupLeaderID}
                                userId={singleStudent._id}
                                groupLeader={groupLeaderID}
                                approveUser={approveUser}
                                rejectUser={rejectUser}
                            />
                        ))}
                    </div>
                </FinalizeGroupWrapper>
            </StudentModalButtonWrapper>
        </div>
    )
}

export default RequestList
