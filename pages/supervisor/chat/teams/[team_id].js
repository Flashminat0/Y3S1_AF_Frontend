import React from 'react'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import {NavigationOnSupervisorChat} from '../../../../components/common/navigation'
import BasicConversationWindow from '../../../../components/chat/bubbles/supervisor/BasicConversationWIndow'
import {useRouter} from 'next/router'

const TeamId = () => {
    const router = useRouter()
    const {team_id} = router.query

    return (
        <BaseChatWrapper
            navigation={NavigationOnSupervisorChat}
            selectedType={'Team'}
            dataID={team_id}
        >
            <BasicConversationWindow receiver={team_id} />
        </BaseChatWrapper>
    )
}

export default TeamId
