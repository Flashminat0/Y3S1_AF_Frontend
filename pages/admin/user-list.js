import React from 'react'
import AdminSideBarWrapper from '../../components/layouts/admin/AdminSideBarWrapper'
import {useRouter} from 'next/router'
import UserInfoList from '../../components/boxes/lists/single/admin/UserInfoList'

const UserList = () => {
    const router = useRouter()

    const openHomePage = async () => {
        await router.push('/')
    }

    const openGroupListPage = async () => {
        await router.push('/admin/group-list')
    }

    return (
        <AdminSideBarWrapper selectedPageIndex={5} navigateHome={openHomePage}>
            <UserInfoList navigateFunc={openGroupListPage} />
        </AdminSideBarWrapper>
    )
}

export default UserList
