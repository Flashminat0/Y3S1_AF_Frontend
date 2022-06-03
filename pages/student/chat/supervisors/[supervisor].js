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

    return (
        <BaseChatWrapper
            navigation={NavigationOnStudentChat}
            selectedPageIndex={0}
            selectedType={'Supervisor'}
            activeUserID={supervisor}
        >
            <BasicConversationWindow
                receiver={supervisor}
                approvalState={approvalState}
            />
        </BaseChatWrapper>
    )
}

export default Supervisor
