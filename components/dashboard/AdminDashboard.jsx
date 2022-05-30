import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import UserTable from '../common/table/userTable'

const AdminDashboard = () => {
    const router = useRouter()
    const [view, setView] = useState()
    const [userData, setUserData] = useState([{}])


    useEffect(() => {
        axios.get('http://localhost:8000/api/users/userlist').then((result) => {
            setUserData(result.data.result)
        })
    }, [userData])
    const deleteUser = (userid) => {
        axios
            .delete('http://localhost:8000/api/users/removeuser', {
                data: {id: userid},
            })
            .then(setView(true))
    }

    return (
        <div className="flex items-center justify-center h-screen ">
            {
                <UserTable
                    users={userData}
                    sucessDelete={view}
                    setSuccess={setView}
                    deleteUser={deleteUser}
                />
            }
        </div>
    )
}

export default AdminDashboard
