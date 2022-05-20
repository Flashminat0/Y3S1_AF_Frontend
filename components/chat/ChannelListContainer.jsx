import React from 'react';
import {ChannelList, useChatContext} from "stream-chat-react";

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './'
import Image from "next/image";

const SideBar = () => {
    return (
        <div>
            <h1>Sidebar</h1>
            <Image
                src={"https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/icon.png?alt=media&token=196139b7-7ab9-4236-a168-e71dcefe2f83"}
                width={90}
                height={50}
                alt="logo"/>
        </div>
    );
}

const ChannelListContainer = () => {
    return (
        <>
            <SideBar/>
            <h1>Channel List Container</h1>

        </>
    );
};

export default ChannelListContainer;
