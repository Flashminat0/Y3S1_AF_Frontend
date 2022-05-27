import React from 'react';
import BaseChatWrapper from "../../../components/layouts/chat/BaseChatWrapper";
import {NavigationOnSupervisorChat} from "../../../components/common/navigation";

const Index = () => {
    return (
        <BaseChatWrapper navigation={NavigationOnSupervisorChat}>select a chat to type</BaseChatWrapper>
    );
};

export default Index;
