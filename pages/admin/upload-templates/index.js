import React from 'react'
import AdminSideBarWrapper from '../../../components/layouts/admin/AdminSideBarWrapper'
import UploadProjectTemplateList from "../../../components/boxes/templates/admin/UploadProjectTemplateList";
import {useRouter} from "next/router";

const UploadTemplates = () => {
    const router = useRouter();

    const openTopicListPage = async () => {
      await router.push('/admin/topic-list')
    }

    return (
        <AdminSideBarWrapper selectedPageIndex={3}>
            <UploadProjectTemplateList navigateFunc={openTopicListPage}/>
        </AdminSideBarWrapper>
    )
}

export default UploadTemplates
