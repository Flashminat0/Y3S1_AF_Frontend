import React from 'react'
import AdminSideBarWrapper from '../../components/layouts/admin/AdminSideBarWrapper'
import TopicInfoList from "../../components/boxes/lists/topic/admin/TopicInfoList";
import {useRouter} from "next/router";

const TopicList = () => {
    const router = useRouter();

    const openGroupListPage = async () => {
      await router.push('/admin/group-list')
    }

    return (
        <AdminSideBarWrapper selectedPageIndex={2}>
            <TopicInfoList navigateFunc={openGroupListPage}/>
        </AdminSideBarWrapper>
    )
}

export default TopicList
