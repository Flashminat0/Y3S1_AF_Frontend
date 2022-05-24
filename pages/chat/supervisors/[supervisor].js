import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import BaseChatWrapper from '../../../components/layouts/chat/BaseChatWrapper'
import BasicConversationWindow from '../../../components/chat/BasicConversationWIndow'

const Supervisor = () => {
    const router = useRouter()
    const {supervisor} = router.query

    return (
        <BaseChatWrapper
            selectedPageIndex={0}
            selectedType={'Supervisor'}
            dataID={supervisor}
        >
            <BasicConversationWindow receiver={supervisor} />
        </BaseChatWrapper>
    )
}

export default Supervisor
