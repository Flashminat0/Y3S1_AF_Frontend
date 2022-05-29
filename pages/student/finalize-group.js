import React, {useState} from 'react'
import StudentSideBarWrapper from '../../components/layouts/student/StudentSideBarWrapper'
import RequestList from '../../components/boxes/lists/requests/student/RequestList'
import {useRouter} from 'next/router'
import {useDidUpdate, useLocalStorage} from "@mantine/hooks";
import axios from "axios";

const FinalizeGroup = () => {
    const router = useRouter()

    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })
    const [leaderID, setLeaderID] = useState('');
    const [groupTopic, setGroupTopic] = useState('');
    const [groupMemberArray, setGroupMemberArray] = useState([]);

    const openGroupListPage = async () => {
        await router.push('/student/group-list')
    }

    useDidUpdate(() => {
        axios.get('/api/users/is-in-a-group', {
            params: {
                userId: credentials._id
            }
        }).then(async (res) => {
            if (!res.data.isInAGroup) {
                await router.push('/student/group-list')
                return
            }
            return res.data.group
        }).then((userGroupData) => {
            if (!userGroupData) return

            setLeaderID(userGroupData.leaderId)
            setGroupTopic(userGroupData.name)
            setGroupMemberArray(userGroupData.members);
        })
    }, [])


    return (
        <StudentSideBarWrapper selectedPageIndex={1}>
            <RequestList groupMemberArray={groupMemberArray} groupTopic={groupTopic} groupLeaderID={leaderID} navigateFunc={openGroupListPage}/>
        </StudentSideBarWrapper>
    )
}

export default FinalizeGroup
