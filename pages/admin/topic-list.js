import React, {useEffect, useState} from 'react'
import AdminSideBarWrapper from '../../components/layouts/admin/AdminSideBarWrapper'
import TopicInfoList from '../../components/boxes/lists/topic/admin/TopicInfoList'
import {useRouter} from 'next/router'
import axios from 'axios'

const TopicList = () => {
    const router = useRouter()

    const openGroupListPage = async () => {
        await router.push('/admin/group-list')
    }

    const [topicTagsList, setTopicTagsList] = useState([])

    useEffect(() => {
        axios.get('/api/display-topic').then((result) => {
            setTopicTagsList(result.data)
        })
    }, [])

    return (
        <AdminSideBarWrapper selectedPageIndex={2}>
            <TopicInfoList
                topicTagsList={topicTagsList}
                navigateFunc={openGroupListPage}
            />
        </AdminSideBarWrapper>
    )
}

export default TopicList
