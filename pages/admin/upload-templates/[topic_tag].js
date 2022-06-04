import React, {useEffect, useState} from 'react'
import AdminSideBarWrapper from '../../../components/layouts/admin/AdminSideBarWrapper'
import UploadProjectTemplateList from '../../../components/boxes/templates/admin/UploadProjectTemplateList'
import {useRouter} from 'next/router'
import axios from 'axios'

const UploadTemplates = () => {
    const router = useRouter()
    const {topic_tag} = router.query

    const openHomePage = async () => {
      await router.push('/')
    }

    const openTopicListPage = async () => {
        await router.push('/admin/topic-list')
    }

    return (
        <AdminSideBarWrapper selectedPageIndex={3} navigateHome={openHomePage}>
            <UploadProjectTemplateList
                id={topic_tag}
                navigateFunc={openTopicListPage}
            />
        </AdminSideBarWrapper>
    )
}

export default UploadTemplates
