import React, {useEffect, useState} from 'react'
import AdminSideBarWrapper from '../../components/layouts/admin/AdminSideBarWrapper'
import PanelList from '../../components/boxes/lists/panels/admin/PanelList'
import {useRouter} from 'next/router'
import axios from 'axios'

const AllocatePanel = () => {
    const [panelMembers, setPanelMembers] = useState()
    const router = useRouter()

    const openTopicListPage = async () => {
        await router.push('/admin/topic-list')
    }
    useEffect(() => {
        try {
            axios.get('/api/users/panelmembers').then((result) => {
                setPanelMembers(result.data)
            })
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <AdminSideBarWrapper selectedPageIndex={1}>
            <PanelList
                navigateFunc={openTopicListPage}
                panelMembers={panelMembers}
            />
        </AdminSideBarWrapper>
    )
}

export default AllocatePanel
