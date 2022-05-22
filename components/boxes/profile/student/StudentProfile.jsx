import React from 'react';
import UserProfileWrapper from "../../../layouts/user/user-profile/common/UserProfileWrapper";

const userDetails = [{
    id: 1,
    url: "https://www.bobbin.lk/wp-content/uploads/2019/02/person2.jpg",
    alt: "profile pic",
    username: "Esther Felicies",
    userRegNo: "IT20796734",
    userRole: "student"
}];

const StudentProfile = () => {
    return (
        <div className={"px-4 py-3 bg-gray-50"}>
            <UserProfileWrapper>
                {userDetails.map((user, index) => (
                    <div key={index} className={"flex flex-col"}>
                        <div className={"flex flex-row justify-between items-baseline"}>
                            <img src={user.url} alt={user.alt} width={"250px"} height={"250px"}
                                 className={"ml-20 rounded-full shadow-lg outline outline-gray-200"}/>
                            <div
                                className={"px-3 py-2 shadow-md text-3xl font-semibold text-blue-800 mr-40 bg-blue-50"}>{user.username}</div>
                        </div>
                        <div className={"px-4 py-5 my-5 bg-gray-100 shadow rounded-lg"}>
                            <div className={"flex flex-row gap-20 justify-start items-center"}>
                                <div className={"flex flex-row gap-3 items-center"}>
                                    <div className={"uppercase"}>User Reg No:</div>
                                    <div className={"text-lg font-semibold capitalize"}>{user.userRegNo}</div>
                                </div>
                                <div className={"flex flex-row gap-3 items-center"}>
                                    <div className={"uppercase"}>User Role:</div>
                                    <div className={"text-lg font-semibold capitalize"}>{user.userRole}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </UserProfileWrapper>
        </div>
    );
};

export default StudentProfile;