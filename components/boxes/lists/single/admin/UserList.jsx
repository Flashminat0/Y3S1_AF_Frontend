import React, {useState} from 'react';
import UserSearchWrapper from "../../../../layouts/user/single/admin/UserSearchWrapper";
import SingleUserBox from "./SingleUserBox";

const userStaticData = [
    {
        id: 1,
        userName: "Anne Wotson",
        userRegNo: "IT20809745",
        userRole: "student"
    }, {
        id: 2,
        userName: "neha nichola",
        userRegNo: "IT10309416",
        userRole: "supervisor"
    }, {
        id: 3,
        userName: "Mary jonson",
        userRegNo: "IT20809796",
        userRole: "student"
    }, {
        id: 4,
        userName: "Peter Pan",
        userRegNo: "IT10839756",
        userRole: "co-supervisor"
    }, {
        id: 5,
        userName: "Yash Stevan",
        userRegNo: "IT20409778",
        userRole: "student"
    }, {
        id: 6,
        userName: "Bob cary",
        userRegNo: "IT10209796",
        userRole: "panel-member"
    },];

const UserList = () => {
    const [userSets, setUserSets] = useState(userStaticData);

    return (
        <div>
            <UserSearchWrapper>
                {userSets.map((user,index)=>(
                    <SingleUserBox key={index} userName={user.userName} userRegNo={user.userRegNo} userRole={user.userRole}/>
                ))}
            </UserSearchWrapper>
        </div>
    );
};

export default UserList;