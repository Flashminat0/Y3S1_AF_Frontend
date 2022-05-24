import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useLocalStorage} from '@mantine/hooks'
import axios from 'axios'
import UserTable from '../common/table/userTable'

const AdminDashboard = () => {
    const router = useRouter()
    const [profileData, setProfileData] = useState({})
    const [userData, setUserData] = useState([{}])
    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    useEffect(() => {
        axios.get('/api/users/userlist').then((result) => {
            setUserData(result.data.result)
        })
    }, [])

    return <div>{<UserTable users={userData} />}</div>
}

export default AdminDashboard
