import React from 'react'
import {useRouter} from 'next/router'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import BasicConversationWindow from '../../../../components/chat/bubbles/student/BasicConversationWIndow'
import {useDocumentTitle} from "@mantine/hooks";
import {NavigationOnStudentChat} from "../../../../components/common/navigation";

const CoSupervisors = () => {
    const router = useRouter()
    const {co_supervisor} = router.query

    useDocumentTitle('Co-Supervisors Chat Screen')


    return (
        <BaseChatWrapper
            navigation={NavigationOnStudentChat}
            selectedPageIndex={1}
            selectedType={'Co-Supervisor'}
            dataID={co_supervisor}
        >
            <BasicConversationWindow receiver={co_supervisor} />
        </BaseChatWrapper>
    )
}

export default CoSupervisors
