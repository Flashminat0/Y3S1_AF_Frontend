import React, {useState} from 'react'
import FinalizeGroupWrapper from '../../../../layouts/finalize-group/FinalizeGroupWrapper'
import SingleRequestBox from './SingleRequestBox'
import StudentModalButtonWrapper from '../../../../layouts/student/StudentModalButtonWrapper'
import {useRouter} from 'next/router'

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

const RequestList = ({navigateFunc}) => {
    const [requestList, setRequestList] = useState(requestUsersStaticData)

    const submitGroupData = ()=>{

    }

    return (
        <div>
            <StudentModalButtonWrapper
                btnName={'Check Group List'}
                btnFunction={navigateFunc}
            >
                <FinalizeGroupWrapper btnFunction={submitGroupData}>
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
