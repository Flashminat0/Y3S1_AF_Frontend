import React, {useEffect, useState} from 'react'
import UserProfileWrapper from '../../../layouts/user/user-profile/common/UserProfileWrapper'
import {useLocalStorage} from '@mantine/hooks'
import axios from 'axios'

const StudentProfile = () => {
    const [userDetails, setUserDetails] = useState(null)
    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    useEffect(() => {
        fetchUserData()
    }, [])

    const fetchUserData = () => {
        axios
            .get('/api/users/get-user-data-from-id', {
                params: {userId: credentials._id},
            })
            .then((res) => setUserDetails(res.data))
    }

    return (
        <div className={'px-4 py-3 bg-gray-50'}>
            {userDetails && (
                <>
                    <UserProfileWrapper role={userDetails.role}>
                        <div className={'flex flex-col'}>
                            <div
                                className={
                                    'flex flex-row justify-between items-baseline'
                                }
                            >
                                <img
                                    src={userDetails.image.url}
                                    alt={userDetails.image.name}
                                    width={'250px'}
                                    height={'250px'}
                                    className={
                                        'w-[10rem] h-[10rem] lg:w-[20rem] lg:h-[20rem] ml-10 sm:ml-20 rounded-full shadow-lg outline outline-gray-400'
                                    }
                                />
                                <div
                                    className={
                                        'px-3 py-2 shadow-md text-lg sm:text-xl lg:text-3xl font-semibold text-blue-800 mr-2 sm:mr-10 lg:mr-40 bg-blue-50'
                                    }
                                >
                                    {userDetails.name
                                        .substring(
                                            0,
                                            userDetails.name.lastIndexOf(' ')
                                        )
                                        .toString()}
                                </div>
                            </div>
                            <div
                                className={
                                    'px-4 py-5 my-5 bg-gray-100 shadow rounded-lg'
                                }
                            >
                                <div
                                    className={
                                        'flex flex-row gap-20 justify-start items-center'
                                    }
                                >
                                    <div
                                        className={
                                            'flex flex-row gap-3 items-center'
                                        }
                                    >
                                        <div className={'uppercase'}>
                                            User Reg No:
                                        </div>
                                        <div
                                            className={'text-lg font-semibold'}
                                        >
                                            {userDetails.name
                                                .substring(
                                                    userDetails.name.lastIndexOf(
                                                        ' '
                                                    ) + 1,
                                                    userDetails.name.length
                                                )
                                                .toString()}
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            'flex flex-row gap-3 items-center'
                                        }
                                    >
                                        <div className={'uppercase'}>
                                            User Role:
                                        </div>
                                        <div
                                            className={
                                                'text-lg font-semibold capitalize'
                                            }
                                        >
                                            {userDetails.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </UserProfileWrapper>
                </>
            )}
        </div>
    )
}

export default StudentProfile
