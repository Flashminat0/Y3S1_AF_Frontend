import React, {useEffect, useState} from 'react'
import StudentSideBarWrapper from '../../components/layouts/student/StudentSideBarWrapper'
import GroupsList from '../../components/boxes/lists/group/student/GroupsList'
import {useDidUpdate, useLocalStorage} from '@mantine/hooks'
import {useRouter} from "next/router";

const GroupList = () => {
    const router = useRouter()

    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    const openHomePage = async () => {
        await router.push('/')
    }


    return (
        <StudentSideBarWrapper selectedPageIndex={0} navigateHome={openHomePage}>
            <GroupsList credentials={credentials} />
        </StudentSideBarWrapper>
    )
}

export default GroupList
