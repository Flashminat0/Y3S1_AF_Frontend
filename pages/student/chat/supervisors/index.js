import React, {useEffect, useState} from 'react'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import {useDebouncedValue, useDocumentTitle} from '@mantine/hooks'
import SupervisorChatListSideBar from '../../../../components/lists/chatlists/SupervisorChatListSideBar'
import SupervisorApproval from '../../../../components/approvals/SupervisorApproval'
import {AnimatePresence} from 'framer-motion'
import Confetti from '../../../../components/approvals/Confetti'
import {NavigationOnStudentChat} from '../../../../components/common/navigation'
import axios from 'axios'

const Supervisors = () => {
    useDocumentTitle('Supervisors Chat Screen')

    // pending , approved, rejected
    const [status, setStatus] = useState('pending')

    const [hoveringUsrId, setHoveringUsrId] = useState('')
    const [debouncedHoveringUsrId] = useDebouncedValue(hoveringUsrId, 200)

    const onUserHover = (id) => {
        setHoveringUsrId(id)
    }

    const [supervisorsList, setSupervisorsList] = useState([])
    useEffect(() => {
        const fetchSupervisors = async () => {
            await axios.get('/api/users/get-supervisors').then((res) => {
                setSupervisorsList(res.data)
            })
        }

        fetchSupervisors()
    }, [])

    return (
        <BaseChatWrapper
            navigation={NavigationOnStudentChat}
            selectedPageIndex={0}
            activeUserID={debouncedHoveringUsrId}
            selectedType={'Supervisor'}
        >
            <div className={`flex h-full w-max`}>
                <AnimatePresence>
                    {setSupervisorsList && setSupervisorsList.length > 0 && (
                        <>
                            <SupervisorChatListSideBar
                                onUserHover={onUserHover}
                                supervisorsList={supervisorsList}
                            />
                        </>
                    )}
                </AnimatePresence>
            </div>
            <SupervisorApproval status={status} />
            {status === 'approved' && <Confetti />}
        </BaseChatWrapper>
    )
}

export default Supervisors
