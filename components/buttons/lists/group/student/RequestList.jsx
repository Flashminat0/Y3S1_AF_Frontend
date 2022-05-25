import React, {useState} from 'react'
import FinalizeGroupWrapper from '../../../../layouts/finalize-group/student/FinalizeGroupWrapper'
import SingleRequestBox from './SingleRequestBox'

const requestUsersStaticData = [
    {
        userName: 'Anne Wotson',
        userRegNo: 'IT20809745',
        acceptedStatus: true,
    },
    {
        userName: 'neha nichola',
        userRegNo: 'IT10309416',
        acceptedStatus: false,
    },
    {
        userName: 'Mary jonson',
        userRegNo: 'IT20809796',
        acceptedStatus: true,
    },
    {
        userName: 'Peter Pan',
        userRegNo: 'IT10839756',
        acceptedStatus: false,
    },
    {
        userName: 'Yash Stevan',
        userRegNo: 'IT20409778',
        acceptedStatus: false,
    },
    {
        userName: 'Bob cary',
        userRegNo: 'IT10209796',
        acceptedStatus: false,
    },
]

const RequestList = () => {
    const [requestList, setRequestList] = useState(requestUsersStaticData)

    return (
        <div>
            <FinalizeGroupWrapper>
                {requestList.map((request) => (
                    <SingleRequestBox
                        userName={request.userName}
                        userRegNo={request.userRegNo}
                        acceptedStatus={request.acceptedStatus}
                    />
                ))}
            </FinalizeGroupWrapper>
        </div>
    )
}

export default RequestList
