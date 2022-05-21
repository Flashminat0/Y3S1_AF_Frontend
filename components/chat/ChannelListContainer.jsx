import React from 'react';
import SupervisorChatListSideBar from "../lists/chatlists/SupervisorChatListSideBar";

const ChannelListContainer = ({sidebar}) => {
    return (
        <div className={`flex`}>
            {sidebar}
            <h1>Channel List Container</h1>

        </div>
    );
};

export default ChannelListContainer;
