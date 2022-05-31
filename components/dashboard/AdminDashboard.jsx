import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import UserTable from '../common/table/userTable'
import {useScrollTrigger} from '@mui/material'

const AdminDashboard = () => {
    const router = useRouter()
    const [view, setView] = useState()
    const [userData, setUserData] = useState([])
    const [trigger, setTrigger] = useState(1)

    useEffect(() => {
        axios.get('/api/users/userlist').then((result) => {
            setUserData(result.data.result)
        })
    }, [trigger])
    const deleteUser = (userid) => {
        axios
            .delete('/api/users/removeuser', {
                data: {id: userid},
            })
            .then(setView(true))
    }
    const updateUserRole = async (id, role) => {
        try {
            await axios.put('/api/user/updaterole', {
                id: id,
                role: role,
            })
            setTrigger(trigger + 1)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen ">
            {
                <UserTable
                    users={userData}
                    sucessDelete={view}
                    setSuccess={setView}
                    deleteUser={deleteUser}
                    setTrigger={setTrigger}
                    trigger={trigger}
                    updateUserRole={updateUserRole}
                />
            }
        </div>
    )
}

export default AdminDashboard
