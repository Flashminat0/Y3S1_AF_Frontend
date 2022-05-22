import React, {useState} from 'react';
import BaseChatWrapper from "../../components/layouts/chat/BaseChatWrapper";
import {useDocumentTitle} from "@mantine/hooks";
import TeamMembersList from "../../components/panels/chat/TeamMembersList";

const Team = () => {
    useDocumentTitle("Team Chat Screen");

    const [memberList, setMemberList] = useState(static_member_list);

    return (
        <BaseChatWrapper selectedPageIndex={2} hoveringUserId={<TeamMembersList memberList={memberList}/>}>
            Team
        </BaseChatWrapper>
    );
};

export default Team;


const static_member_list = [
    {
        _id: "1a6b3ab9-604c-4229-adfa-8af8fbd7559e",
        name: 'slide first',
    },
    {
        _id: "7a80dd42-13a2-465f-a176-345bd87a91d9",
        name: 'look deepen',
    },
    {
        _id: "a6256bcc-72d3-40eb-ad84-852d754a3525",
        name: 'body scent',
    },
    {
        _id: "28bed17e-cb13-4425-b6fd-dcfa912011ad",
        name: 'measure act',
    }
]
