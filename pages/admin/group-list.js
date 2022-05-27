import React from 'react'
import AdminSideBarWrapper from '../../components/layouts/admin/AdminSideBarWrapper'
import GroupsList from '../../components/boxes/lists/group/admin/GroupsList'
import {useRouter} from 'next/router'

const GroupList = () => {
    const router = useRouter()

    const openTopicListPage = async () => {
        await router.push('/admin/user-list')
    }

    return (
        <AdminSideBarWrapper selectedPageIndex={0}>
            <GroupsList navigateFunc={openTopicListPage} />
        </AdminSideBarWrapper>
    )
}

export default GroupList
