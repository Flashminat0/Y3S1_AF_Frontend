import React, {useEffect, useState} from 'react'
import StudentSideBarWrapper from '../../components/layouts/student/StudentSideBarWrapper'
import GroupsList from '../../components/boxes/lists/group/student/GroupsList'
import {useDidUpdate} from "@mantine/hooks";

const GroupList = () => {
    // const [credentials, setCredentials] = useLocalStorage({
    //     key: 'y3s1-af-credentials',
    //     defaultValue: {},
    // })

    // const [credentials, setCredentials] = useState({})
    // useEffect(() => {
    //     if(typeof window !== "undefined") {
    //         // Access localStorage
    //         console.log(window.localStorage.getItem('y3s1-af-credentials'));
    //
    //         // setCredentials(window.localStorage.getItem('y3s1-af-credentials'))
    //     }
    // }, [])

    return (
        <StudentSideBarWrapper selectedPageIndex={0}>
            <GroupsList credentials={credentials} />
        </StudentSideBarWrapper>
    )
}

export default GroupList
