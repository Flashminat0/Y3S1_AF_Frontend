import React from 'react'
import {useRouter} from 'next/router'
import BaseChatWrapper from '../../../components/layouts/chat/BaseChatWrapper'
import BasicConversationWindow from "../../../components/chat/BasicConversationWIndow";

const CoSupervisors = () => {
    const router = useRouter()
    const {co_supervisor} = router.query

    return (
        <BaseChatWrapper
            selectedPageIndex={1}
            selectedType={'Co-Supervisor'}
            dataID={co_supervisor}
        >
            <BasicConversationWindow receiver={co_supervisor}/>
        </BaseChatWrapper>
    )
}

export default CoSupervisors
