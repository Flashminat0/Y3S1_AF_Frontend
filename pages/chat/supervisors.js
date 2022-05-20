import React from 'react';
import BaseChatWrapper from "../../components/layouts/chat/BaseChatWrapper";
import {useDocumentTitle} from "@mantine/hooks";

const Supervisors = () => {
    useDocumentTitle("Supervisors Chat Screen");


    return (
        <BaseChatWrapper selectedPageIndex={0}>
            Supervisors
        </BaseChatWrapper>
    );
};

export default Supervisors;
