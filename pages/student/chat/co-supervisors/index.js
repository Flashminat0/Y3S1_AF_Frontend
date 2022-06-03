import React, {useEffect, useState} from 'react'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import {useDebouncedValue, useDocumentTitle} from '@mantine/hooks'
import CoSuperVisorApproval from '../../../../components/approvals/CoSuperVisorApproval'
import {AnimatePresence} from 'framer-motion'
import Confetti from '../../../../components/approvals/Confetti'
import {NavigationOnStudentChat} from '../../../../components/common/navigation'
import axios from 'axios'
import CoSupervisorChatListSideBar from '../../../../components/lists/chatlists/CoSupervisorChatListSideBar'

const CoSupervisors = () => {
    useDocumentTitle('Co-Supervisors Chat Screen')

    // pending , approved, rejected
    const [status, setStatus] = useState('approved')

    const [hoveringUsrId, setHoveringUsrId] = useState('')
    const [debouncedHoveringUsrId] = useDebouncedValue(hoveringUsrId, 200)

    const onUserHover = (id) => {
        setHoveringUsrId(id)
    }

    const [coSupervisorsList, setCoSupervisorsList] = useState([])
    useEffect(() => {
        const fetchSupervisors = async () => {
            await axios.get('/api/users/get-co-supervisors').then((res) => {
                setCoSupervisorsList(res.data)
            })
        }

        fetchSupervisors()
    }, [])

    return (
        <BaseChatWrapper
            navigation={NavigationOnStudentChat}
            selectedPageIndex={1}
            activeUserID={debouncedHoveringUsrId}
            selectedType={'Co-Supervisor'}
        >
            <div className={`flex h-full w-max `}>
                <AnimatePresence>
                    {setCoSupervisorsList && setCoSupervisorsList.length > 0 && (
                        <>
                            <CoSupervisorChatListSideBar
                                onUserHover={onUserHover}
                                coSupervisorsList={coSupervisorsList}
                            />
                        </>
                    )}
                </AnimatePresence>
            </div>
            <CoSuperVisorApproval status={status} />
            {status === 'approved' && <Confetti />}
        </BaseChatWrapper>
    )
}

export default CoSupervisors
