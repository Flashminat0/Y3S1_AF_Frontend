import React from 'react';
import {useRouter} from "next/router";
import {useLocalStorage} from "@mantine/hooks";
import StudentProfile from "../../components/boxes/profile/student/StudentProfile";
import StudentSideBarWrapper from "../../components/layouts/student/StudentSideBarWrapper";

const Profile = () => {
    const router = useRouter()

    return (
        <StudentSideBarWrapper selectedPageIndex={99}>
            <StudentProfile/>
        </StudentSideBarWrapper>
    );
};

export default Profile;