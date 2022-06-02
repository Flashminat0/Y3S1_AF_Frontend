import React, {useState} from 'react'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import {useDebouncedValue, useDocumentTitle} from '@mantine/hooks'
import SupervisorChatListSideBar from '../../../../components/lists/chatlists/SupervisorChatListSideBar'
import SupervisorApproval from '../../../../components/approvals/SupervisorApproval'
import {AnimatePresence} from 'framer-motion'
import Confetti from '../../../../components/approvals/Confetti'
import {NavigationOnStudentChat} from '../../../../components/common/navigation'

const supervisorsStaticData = [
    {
        _id: '6293915a8596b2707981b5d7',
        name: 'slide first',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '6293a857a6f920faf64488a6',
        name: 'look deepen',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '62947bac92946530da8f76e1',
        name: 'rock ear',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        _id: '6295e1b04e90dda28b9b03f8',
        name: 'dinner shorten',
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
            activeUserID={debouncedHoveringUsrId}
            selectedType={'Supervisor'}
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
