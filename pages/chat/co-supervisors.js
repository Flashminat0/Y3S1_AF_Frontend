import React from 'react';
import BaseChatWrapper from "../../components/layouts/chat/BaseChatWrapper";
import {useDocumentTitle} from "@mantine/hooks";

const CoSupervisors = () => {
    useDocumentTitle("Co-Supervisors Chat Screen");
    return (
        <BaseChatWrapper selectedPageIndex={1}>
            Co-Supervisors
        </BaseChatWrapper>
    );
};

export default CoSupervisors;
