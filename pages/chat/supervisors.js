import React, {useEffect} from 'react';
import BaseChatWrapper from "../../components/layouts/chat/BaseChatWrapper";
import {useDocumentTitle} from "@mantine/hooks";
import {StreamChat} from 'stream-chat';
import {Chat} from "stream-chat-react";
import ChannelListContainer from "../../components/chat/ChannelListContainer";
import SupervisorChatListSideBar from "../../components/lists/chatlists/SupervisorChatListSideBar";

const Supervisors = () => {
    useDocumentTitle("Supervisors Chat Screen");

    const client = new StreamChat(process.env.STREAM_API_KEY);

    return (
        <BaseChatWrapper selectedPageIndex={0}>
            <Chat client={client}>
                <ChannelListContainer sidebar={<SupervisorChatListSideBar/>}/>
                {/*<ChannelContainer/>*/}
            </Chat>
        </BaseChatWrapper>
    );
};

export default Supervisors;
