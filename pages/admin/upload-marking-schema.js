import React from 'react'
import AdminSideBarWrapper from '../../components/layouts/admin/AdminSideBarWrapper'
import {useRouter} from 'next/router'
import Markingschema from '../markingschema/markingschema'

const UploadMarkingSchema = () => {
    const router = useRouter()

    const openHomePage = async () => {
        await router.push('/')
    }

    return (
        <AdminSideBarWrapper selectedPageIndex={4} navigateHome={openHomePage}>
            <Markingschema />
        </AdminSideBarWrapper>
    )
}

export default UploadMarkingSchema
