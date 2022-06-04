import React, {useState} from 'react'
import {useRouter} from 'next/router'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import {NavigationOnSupervisorChat} from '../../../../components/common/navigation'
import BasicConversationWindow from '../../../../components/chat/bubbles/supervisor/BasicConversationWIndow'

const TeamId = () => {
    const router = useRouter()
    const {team_id} = router.query

    const [approvalState, setApprovalState] = useState('approved')

    return (
        <BaseChatWrapper
            navigation={NavigationOnSupervisorChat}
            selectedType={'Student'}
            activeUserID={team_id}
        >
            <BasicConversationWindow
                receiver={team_id}
                approvalState={approvalState}
            />
        </BaseChatWrapper>
    )
}

export default TeamId
