import React, {useEffect, useState} from 'react'
import {AnimatePresence} from 'framer-motion'
import {useDebouncedValue} from '@mantine/hooks'
import BaseChatWrapper from '../../../../components/layouts/chat/BaseChatWrapper'
import {NavigationOnSupervisorChat} from '../../../../components/common/navigation'
import StudentChatListSideBar from '../../../../components/lists/chatlists/StudentChatListSideBar'
import axios from 'axios'

const Index = () => {
    const [hoveringUsrId, setHoveringUsrId] = useState('')
    const [debouncedHoveringUsrId] = useDebouncedValue(hoveringUsrId, 200)

    const onUserHover = (id) => {
        setHoveringUsrId(id)
    }

    const [studentLists, setStudentLists] = useState([])
    useEffect(() => {
        const fetchSupervisors = async () => {
            await axios.get('/api/users/get-students').then((res) => {
                setStudentLists(res.data)
            })
        }
        fetchSupervisors()
    }, [])

    return (
        <BaseChatWrapper
            selectedPageIndex={0}
            navigation={NavigationOnSupervisorChat}
            activeUserID={debouncedHoveringUsrId}
            selectedType={'Student'}
        >
            <div className={`flex h-full w-max`}>
                <AnimatePresence>
                    {setStudentLists && setStudentLists.length > 0 && (
                        <>
                            <StudentChatListSideBar
                                onUserHover={onUserHover}
                                studentTeamList={studentLists}
                            />
                        </>
                    )}
                </AnimatePresence>
            </div>
        </BaseChatWrapper>
    )
}

export default Index

const studentTeamStaticData = [
    {
        _id: 'aaaaaaaaaaaaaaaaaa',
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
