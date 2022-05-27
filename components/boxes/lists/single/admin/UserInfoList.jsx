import React, {useState} from 'react'
import SingleUserBox from './SingleUserBox'
import GroupListWrapper from '../../../../layouts/user/group/GroupListWrapper'
import SearchBar from '../../../../searchbar/SearchBar'
import AdminModalButtonWrapper from "../../../../layouts/admin/AdminModalButtonWrapper";

const userStaticData = [
    {
        id: 1,
        userName: 'Anne Wotson',
        userRegNo: 'IT20809745',
        userRole: 'student',
    },
    {
        id: 2,
        userName: 'neha nichola',
        userRegNo: 'IT10309416',
        userRole: 'supervisor',
    },
    {
        id: 3,
        userName: 'Mary jonson',
        userRegNo: 'IT20809796',
        userRole: 'student',
    },
    {
        id: 4,
        userName: 'Peter Pan',
        userRegNo: 'IT10839756',
        userRole: 'co-supervisor',
    },
    {
        id: 5,
        userName: 'Yash Stevan',
        userRegNo: 'IT20409778',
        userRole: 'student',
    },
    {
        id: 6,
        userName: 'Bob cary',
        userRegNo: 'IT10209796',
        userRole: 'panel-member',
    },
]


const UserInfoList = ({navigateFunc}) => {
    const [userSets, setUserSets] = useState(userStaticData)


    return (
        <AdminModalButtonWrapper btnName={'Check Group List'} btnFunction={navigateFunc}>
            <GroupListWrapper>
                <SearchBar placeholder={'User Search'}/>
                <div>
                    {userSets.map((user) =>
                        <SingleUserBox
                            key={user.id}
                            userName={user.userName}
                            userRegNo={user.userRegNo}
                            userRole={user.userRole}
                        />)}
                </div>
            </GroupListWrapper>
        </AdminModalButtonWrapper>
    )
}

export default UserInfoList
