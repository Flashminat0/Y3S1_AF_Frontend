import React from 'react'
import StudentSideBarWrapper from '../../../components/layouts/student/StudentSideBarWrapper'
import ProjectTemplateList from '../../../components/boxes/templates/student/ProjectTemplateList'
import {useRouter} from 'next/router'

const Topic_tag = () => {
    const router = useRouter()
    const {topic_tag} = router.query

    const openProjectTemplatesPage = async () => {
        await router.push('/student/marking-schema')
    }

    return (
        <StudentSideBarWrapper selectedPageIndex={3}>
            <ProjectTemplateList
                id={topic_tag}
                navigateFunc={openProjectTemplatesPage}
            />
        </StudentSideBarWrapper>
    )
}

export default Topic_tag
