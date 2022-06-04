import React, {useEffect} from 'react'
import AdminSideBarWrapper from '../../components/layouts/admin/AdminSideBarWrapper'
import GroupsList from '../../components/boxes/lists/group/admin/GroupsList'
import {useRouter} from 'next/router'
import axios from 'axios'

const GroupList = () => {
    const router = useRouter()

    const openHomePage = async () => {
        await router.push('/')
    }

    const openTopicListPage = async () => {
        await router.push('/admin/user-list')
    }

    return (
        <AdminSideBarWrapper selectedPageIndex={0} navigateHome={openHomePage}>
            <GroupsList navigateFunc={openTopicListPage} />
        </AdminSideBarWrapper>
    )
}

export default GroupList
