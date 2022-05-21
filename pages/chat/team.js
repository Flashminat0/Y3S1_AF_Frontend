import React from 'react';
import BaseChatWrapper from "../../components/layouts/chat/BaseChatWrapper";
import {useDocumentTitle} from "@mantine/hooks";

const Team = () => {
    useDocumentTitle("Team Chat Screen");

    return (
        <BaseChatWrapper selectedPageIndex={2}>
            Team
        </BaseChatWrapper>
    );
};

export default Team;
