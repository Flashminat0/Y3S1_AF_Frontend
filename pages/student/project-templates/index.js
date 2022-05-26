import React from 'react';
import StudentSideBarWrapper from "../../../components/layouts/student/StudentSideBarWrapper";
import ProjectTemplateList from "../../../components/boxes/templates/student/ProjectTemplateList";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter();

    const openProjectTemplatesPage = async () => {
        await router.push('/student/marking-schema')
    }

    return (
        <StudentSideBarWrapper selectedPageIndex={3}>
            <ProjectTemplateList navigateFunc={openProjectTemplatesPage}/>
        </StudentSideBarWrapper>
    );
};

export default Index;