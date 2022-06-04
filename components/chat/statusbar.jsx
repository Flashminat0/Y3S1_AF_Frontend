import React from 'react'
import {
    LoadingAnimation,
    NotOkAnimation,
    OkAnimation,
} from '../assets/animations'
import {Button} from '@mui/material'
import axios from 'axios'
import {useLocalStorage} from '@mantine/hooks'

const Statusbar = ({userId, type, status, selectedType, userData}) => {
    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    const approveProject = async () => {
        await axios
            .get('/api/users/get-user-data-from-id', {
                params: {
                    userId: credentials._id,
                },
            })
            .then(async (res) => {
                await axios.post('/api/chat/approve-project', {
                    studentId: userData._id,
                    staffId: credentials._id,
                    role: res.data.role,
                })
            })
    }

    const rejectProject = async () => {
        await axios
            .get('/api/users/get-user-data-from-id', {
                params: {
                    userId: credentials._id,
                },
            })
            .then(async (res) => {
                await axios.post('/api/chat/reject-project', {
                    studentId: userData._id,
                    staffId: credentials._id,
                    role: res.data.role,
                })
            })
    }

    return (
        <div
            className={`grid place-items-center grid place-items-center mt-20 `}
        >
            <div className="space-y-4 grid place-items-center">
                <img
                    className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src={userData.image.url}
                    alt={userData.image.name}
                />
                <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                        <h3>{userData.name}</h3>
                        <p className="text-indigo-600 capitalize">
                            {userData.role.split('_').join(' ')}
                        </p>
                        {selectedType !== 'Student' ? (
                            <div className={`flex justify-between px-5 pt-3`}>
                                {status === 'pending' && (
                                    <>
                                        Pending Approval &nbsp;&nbsp;
                                        <LoadingAnimation />
                                    </>
                                )}
                                {status === 'approved' && (
                                    <>
                                        Topic Approved &nbsp;&nbsp;
                                        <OkAnimation />
                                    </>
                                )}
                                {status === 'rejected' && (
                                    <>
                                        Topic Rejected &nbsp;&nbsp;
                                        <NotOkAnimation />
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className={`grid gap-3`}>
                                <Button
                                    className={`col-span-1`}
                                    fullWidth={true}
                                    color={'success'}
                                    variant={'outlined'}
                                    onClick={approveProject}
                                >
                                    Approve
                                </Button>
                                <Button
                                    className={`col-span-1`}
                                    fullWidth={true}
                                    color={'error'}
                                    variant={'outlined'}
                                >
                                    Reject
                                </Button>
                            </div>
                        )}

                        <p className={`flex gap-2   `}>
                            {userData.tags.map((singleTag) => {
                                return (
                                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                        {singleTag}
                                    </span>
                                )
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statusbar
