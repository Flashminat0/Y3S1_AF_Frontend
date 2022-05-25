import React from 'react'
import BaseChatWrapper from '../../../components/layouts/chat/BaseChatWrapper'
import {useDocumentTitle} from '@mantine/hooks'
import CoSupervisorChatListSideBar from '../../../components/lists/chatlists/CoSupervisorChatListSideBar'

const CoSupervisors = () => {
    useDocumentTitle('Co-Supervisors Chat Screen')

    return (
        <BaseChatWrapper selectedPageIndex={1}>
            <div className={`flex`}>
                <CoSupervisorChatListSideBar />
                select a chat Co-Supervisors
            </div>
        </BaseChatWrapper>
    )
}

export default CoSupervisors
