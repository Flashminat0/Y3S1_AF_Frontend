import React from 'react';
import StudentSideBarWrapper from "../../../components/layouts/student/StudentSideBarWrapper";
import RequestList from "../../../components/boxes/lists/requests/student/RequestList";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter();

    const openGroupListPage = async () => {
        await router.push('/student/group-list')
    }

    return (
        <StudentSideBarWrapper selectedPageIndex={1}>
            <RequestList navigateFunc={openGroupListPage}/>
        </StudentSideBarWrapper>
    );
};

export default Index;