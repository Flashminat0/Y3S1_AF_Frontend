import React from 'react'
import StudentSideBarWrapper from '../../components/layouts/student/StudentSideBarWrapper'
import {useRouter} from 'next/router'

const TopicSubmission = () => {
    const router = useRouter()

    const openHomePage = async () => {
        await router.push('/')
    }

    return (
        <StudentSideBarWrapper
            selectedPageIndex={2}
            navigateHome={openHomePage}
        ></StudentSideBarWrapper>
    )
}

export default TopicSubmission
