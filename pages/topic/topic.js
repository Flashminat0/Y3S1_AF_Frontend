import React from 'react';
import StudentSideBarWrapper from '../../components/layouts/student/StudentSideBarWrapper';
import ViewTopicBox from '../../components/layouts/viewTopic/viewTopicBox';

const topic = () => {
    return (
        <StudentSideBarWrapper>
            <ViewTopicBox />
        </StudentSideBarWrapper>
    );
};

export default topic;
