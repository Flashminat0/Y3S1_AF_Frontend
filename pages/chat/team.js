import React, {useState} from 'react'
import BaseChatWrapper from '../../components/layouts/chat/BaseChatWrapper'
import {useDocumentTitle} from '@mantine/hooks'
import TeamMembersList from '../../components/panels/chat/TeamMembersList'
import BasicConversationWindow from "../../components/chat/BasicConversationWIndow";

const Team = () => {
    useDocumentTitle('Team Chat Screen')

    const [memberList, setMemberList] = useState(static_member_list)

    return (
        <BaseChatWrapper
            selectedPageIndex={2}
            hoveringUserId={<TeamMembersList memberList={memberList} />}
        >
            <BasicConversationWindow receiver={'Team'}/>
        </BaseChatWrapper>
    )
}

export default Team

const static_member_list = [
    {
        _id: '1a6b3ab9-604c-4229-adfa-8af8fbd7559e',
        name: 'slide first',
        email: 'it20421391@my.sliit.lk',
        image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '7a80dd42-13a2-465f-a176-345bd87a91d9',
        name: 'look deepen',
        email: 'it20013431@my.sliit.lk',
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: 'a6256bcc-72d3-40eb-ad84-852d754a3525',
        name: 'body scent',
        email: 'it2432391@my.sliit.lk',
        image: '',
    },
    {
        _id: '28bed17e-cb13-4425-b6fd-dcfa912011ad',
        name: 'measure act',
        email: 'it20129391@my.sliit.lk',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
