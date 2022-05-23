import React, {useState} from 'react'
import BaseChatWrapper from '../../../components/layouts/chat/BaseChatWrapper'
import {useDocumentTitle} from '@mantine/hooks'
import CoSupervisorChatListSideBar from '../../../components/lists/chatlists/CoSupervisorChatListSideBar'
import CoSuperVisorApproval from '../../../components/approvals/CoSuperVisorApproval'
import {AnimatePresence} from "framer-motion";
import { useDebouncedValue } from '@mantine/hooks';

const static_co_supervisors = [
    {
        _id: '1a6b3ab9-604c-4229-adfa-8af8fbd7559e',
        name: 'slide first',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '7a80dd42-13a2-465f-a176-345bd87a91d9',
        name: 'look deepen',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: 'a6256bcc-72d3-40eb-ad84-852d754a3525',
        name: 'body scent',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const CoSupervisors = () => {
    useDocumentTitle('Co-Supervisors Chat Screen')

    const [hoveringUsrId, setHoveringUsrId] = useState('')
    const [debouncedHoveringUsrId] = useDebouncedValue(hoveringUsrId, 200);


    const onUserHover = (id) => {
        setHoveringUsrId(id)
    }

    return (
        <BaseChatWrapper selectedPageIndex={1} hoveringUserId={debouncedHoveringUsrId}>
            <div className={`flex h-full w-max`}>
                <AnimatePresence>
                    <CoSupervisorChatListSideBar
                        onUserHover={onUserHover}
                        coSupervisorsList={static_co_supervisors}
                    />
                </AnimatePresence>
            </div>
            <CoSuperVisorApproval status={`approved`}/>
        </BaseChatWrapper>
    )
}

export default CoSupervisors
