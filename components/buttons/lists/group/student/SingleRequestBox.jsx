import React, { useState } from 'react'
import { Button } from '@mui/material'
import { BsBoxArrowInLeft } from 'react-icons/bs'

const SingleRequestBox = ({ userName, userRegNo, acceptedStatus }) => {
    const [changeStatus, setChangeStatus] = useState(acceptedStatus)

    return (
        <div
            className={'mx-10 my-5 px-4 py-1.5 rounded-lg shadow-md bg-gray-50'}
        >
            <div className={'flex flex-row justify-between items-center'}>
                <div className={'flex flex-col gap-2'}>
                    <div className={'flex flex-row gap-2 items-center'}>
                        <div className={'text-blue-900 uppercase'}>
                            Request Info:
                        </div>
                        <BsBoxArrowInLeft className={'w-5 h-5 text-blue-900'} />
                    </div>
                    <div className={'flex flex-row gap-1 items-center'}>
                        <div className={'text-sm text-gray-800'}>
                            {userName}
                        </div>
                        <div className={'text-sm text-gray-500'}>
                            - {userRegNo}
                        </div>
                    </div>
                </div>
                {changeStatus === true ? (
                    <>
                        <Button
                            className={'h-8'}
                            color={'error'}
                            variant="outlined"
                        >
                            Remove
                        </Button>
                    </>
                ) : (
                    <>
                        <div className={'flex flex-row gap-2'}>
                            <Button
                                className={'h-8'}
                                color={'success'}
                                variant="outlined"
                                onClick={() => {
                                    setChangeStatus(true)
                                }}
                            >
                                Accept
                            </Button>
                            <Button
                                className={'h-8'}
                                color={'error'}
                                variant="outlined"
                            >
                                Reject
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default SingleRequestBox
