import React from 'react';
import {useRouter} from "next/router";
import {useLocalStorage} from "@mantine/hooks";
import StudentProfile from "../../components/boxes/profile/student/StudentProfile";
import StudentSideBarWrapper from "../../components/layouts/student/StudentSideBarWrapper";

const Profile = () => {
    const router = useRouter()

    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    const openProfile = async () => {
        await router.push('/common/profile')
    }

    return (
        <StudentSideBarWrapper selectedPageIndex={99} profileNav={openProfile}>
            <StudentProfile/>
        </StudentSideBarWrapper>
    );
};

export default Profile;