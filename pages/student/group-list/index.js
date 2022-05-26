import React from 'react';
import StudentSideBarWrapper from "../../../components/layouts/student/StudentSideBarWrapper";
import GroupsList from "../../../components/boxes/lists/group/student/GroupsList";

const Index = () => {
    return (
        <StudentSideBarWrapper selectedPageIndex={0}>
            <GroupsList/>
        </StudentSideBarWrapper>
    );
};

export default Index;