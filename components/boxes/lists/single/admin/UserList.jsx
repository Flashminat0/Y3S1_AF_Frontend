import React, {useState} from 'react'
import UserSearchWrapper from '../../../../layouts/user/single/admin/UserSearchWrapper'
import SingleUserBox from './SingleUserBox'

const userStaticData = [
    {
        userName: 'Anne Wotson',
        userRegNo: 'IT20809745',
        userRole: 'student',
    },
    {
        userName: 'neha nichola',
        userRegNo: 'IT10309416',
        userRole: 'supervisor',
    },
    {
        userName: 'Mary jonson',
        userRegNo: 'IT20809796',
        userRole: 'student',
    },
    {
        userName: 'Peter Pan',
        userRegNo: 'IT10839756',
        userRole: 'co-supervisor',
    },
    {
        userName: 'Yash Stevan',
        userRegNo: 'IT20409778',
        userRole: 'student',
    },
    {
        userName: 'Bob cary',
        userRegNo: 'IT10209796',
        userRole: 'panel-member',
    },
]

const UserList = () => {
    const [userSets, setUserSets] = useState(userStaticData)

    return (
        <div>
            <UserSearchWrapper>
                {userSets.map((user) => (
                    <SingleUserBox
                        userName={user.userName}
                        userRegNo={user.userRegNo}
                        userRole={user.userRole}
                    />
                ))}
            </UserSearchWrapper>
        </div>
    )
}

export default UserList
