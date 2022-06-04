import React from 'react'
import StudentSideBarWrapper from '../../components/layouts/student/StudentSideBarWrapper'
import {useRouter} from "next/router";

const MarkingSchema = () => {
    const router = useRouter()

    const openHomePage = async () => {
        await router.push('/')
    }

    return <StudentSideBarWrapper selectedPageIndex={4} navigateHome={openHomePage}></StudentSideBarWrapper>
}

export default MarkingSchema
