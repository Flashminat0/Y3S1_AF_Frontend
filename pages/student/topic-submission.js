import React from 'react';
import StudentSideBarWrapper from '../../components/layouts/student/StudentSideBarWrapper';
import { useRouter } from 'next/router';
import TopicList from '../../components/layouts/createTopic/topicList';

const TopicSubmission = () => {
    const router = useRouter();

    const openHomePage = async () => {
        await router.push('/');
    };

    return (
        <StudentSideBarWrapper
            selectedPageIndex={2}
            navigateHome={openHomePage}
        >
            <TopicList />
        </StudentSideBarWrapper>
    );
};

export default TopicSubmission;
