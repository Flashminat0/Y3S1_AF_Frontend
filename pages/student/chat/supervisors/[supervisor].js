import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import BasicConversationWindow from '../../../../components/chat/bubbles/student/BasicConversationWIndow'
import {useDocumentTitle} from '@mantine/hooks'
import {NavigationOnStudentChat} from '../../../../components/common/navigation'

const Supervisor = () => {
    const router = useRouter()
    const {supervisor} = router.query

    useDocumentTitle('Supervisor Chat Screen')

    const [approvalState, setApprovalState] = useState('pending')
    const [messages, setMessages] = useState(fakeMessages)

    return (
        <BaseChatWrapper
            navigation={NavigationOnStudentChat}
            selectedPageIndex={0}
            selectedType={'Supervisor'}
            dataID={supervisor}
        >
            <BasicConversationWindow
                receiver={supervisor}
                conversation={messages}
                approvalState={approvalState}
            />
        </BaseChatWrapper>
    )
}

export default Supervisor

const fakeMessages = [
    {
        id: 1,
        sender: 'Me',
        message: 'praise social those trouble week fail peculiar spirit mine ',
        type: 'text',
        time: new Date(),
        requestingForApproval: true,
        approvedState: false,
    },
    {
        id: 2,
        sender: 'Me',
        message:
            'group gold mention force dozen enclose today race fat spend road',
        type: 'text',
        time: new Date(),
        requestingForApproval: false,
        approvedState: true,
    },
    {
        id: 3,
        sender: 'NotMe',
        message:
            'sympathy general night generous shilling suggest needle product unit holiday class respect',
        type: 'text',
        time: new Date(),
        requestingForApproval: true,
        approvedState: false,
    },
    {
        id: 4,
        sender: 'Me',
        message: {
            file: '1212121212-abc.pdf',
            url: 'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=2abbb496-a605-40b9-8266-4fc5b4ae1cce',
        },
        type: 'file',
        time: new Date(),
        requestingForApproval: false,
        approvedState: true,
    },
    {
        id: 5,
        sender: 'Me',
        message: 'even 9c760f50-798d-4119-9a5e-b0694af64e27 straight away',
        type: 'text',
        time: new Date(),
        requestingForApproval: false,
        approvedState: false,
    },
    {
        id: 6,
        sender: 'NotMe',
        message: 'flag 51fef481-ec39-4875-940d-b99f66ee0a08 drop cousin',
        type: 'text',
        time: new Date(),
        requestingForApproval: true,
        approvedState: true,
    },
    {
        id: 7,
        sender: 'NotMe',
        message: {
            file: '32323232-File_for_y4s11_project_4_this_is_a_test.mp3',
            url: 'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=2abbb496-a605-40b9-8266-4fc5b4ae1cce',
        },
        type: 'file',
        time: new Date(),
        requestingForApproval: true,
        approvedState: false,
    },
    {
        id: 8,
        sender: 'Me',
        message: 'Ok',
        type: 'text',
        time: new Date(),
        requestingForApproval: true,
        approvedState: true,
    },
    {
        id: 9,
        sender: 'Me',
        message: 'Approved',
        type: 'text',
        time: new Date(),
        requestingForApproval: false,
        approvedState: null,
    },
    {
        id: 10,
        sender: 'NotMe',
        message: '👍',
        type: 'text',
        time: new Date(),
        requestingForApproval: false,
        approvedState: true,
    },
]
