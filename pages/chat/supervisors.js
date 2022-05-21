import React, {useEffect} from 'react';
import BaseChatWrapper from "../../components/layouts/chat/BaseChatWrapper";
import {useDocumentTitle} from "@mantine/hooks";
import SupervisorChatListSideBar from "../../components/lists/chatlists/SupervisorChatListSideBar";

const Supervisors = () => {
    useDocumentTitle("Supervisors Chat Screen");


    return (
        <BaseChatWrapper selectedPageIndex={0}>
            <div className={`flex`}>
                <SupervisorChatListSideBar/>
            </div>
        </BaseChatWrapper>
    );
};

export default Supervisors;
