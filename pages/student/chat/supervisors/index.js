import React, {useState} from 'react'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import {useDebouncedValue, useDocumentTitle} from '@mantine/hooks'
import SupervisorChatListSideBar from '../../../../components/lists/chatlists/SupervisorChatListSideBar'
import SupervisorApproval from '../../../../components/approvals/SupervisorApproval'
import {AnimatePresence} from 'framer-motion'
import Confetti from '../../../../components/approvals/Confetti'
import {NavigationOnStudentChat} from "../../../../components/common/navigation";

const supervisorsStaticData = [
    {
        _id: '961d8c06-79c2-46f0-93cd-605bd6cd2dd6',
        name: 'slide first',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '67036931-7843-424f-b039-4e0cc80fb788',
        name: 'look deepen',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '6745fc53-efaf-4f53-8ec5-1dcffd59780e',
        name: 'rock ear',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '97ebb35a-1ea3-408b-8787-9b0772030700',
        name: 'dinner shorten',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '7c3e7161-4e86-435e-b223-a9670e01b931',
        name: 'body scent',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const Supervisors = () => {
    useDocumentTitle('Supervisors Chat Screen')

    // pending , approved, rejected
    const [status, setStatus] = useState('pending')

    const [hoveringUsrId, setHoveringUsrId] = useState('')
    const [debouncedHoveringUsrId] = useDebouncedValue(hoveringUsrId, 200)

    const onUserHover = (id) => {
        setHoveringUsrId(id)
    }


    return (
        <BaseChatWrapper
            navigation={NavigationOnStudentChat}
            selectedPageIndex={0}
            hoveringUserId={debouncedHoveringUsrId}
        >
            <div className={`flex h-full w-max`}>
                <AnimatePresence>
                    <SupervisorChatListSideBar
                        onUserHover={onUserHover}
                        supervisorsList={supervisorsStaticData}
                    />
                </AnimatePresence>
            </div>
            <SupervisorApproval status={status} />
            {status === 'approved' && <Confetti />}
        </BaseChatWrapper>
    )
}

export default Supervisors