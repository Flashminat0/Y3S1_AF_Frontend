import React, {useEffect} from 'react';
import BaseChatWrapper from "../../components/layouts/chat/BaseChatWrapper";
import {useDocumentTitle} from "@mantine/hooks";
import { StreamChat } from 'stream-chat';

const Supervisors = () => {
    useDocumentTitle("Supervisors Chat Screen");

    const client = new StreamChat(process.env.STREAM_API_KEY);

    useEffect(() => {
        console.log(client);
    }, []);

    return (
        <BaseChatWrapper selectedPageIndex={0}>
            Supervisors
        </BaseChatWrapper>
    );
};

export default Supervisors;
