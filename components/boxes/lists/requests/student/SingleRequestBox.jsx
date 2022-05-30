import React, {useState} from 'react'
import {BsBoxArrowInLeft} from 'react-icons/bs'
import RedShortButton from '../../../../buttons/short-button/RedShortButton'
import GreenShortButton from '../../../../buttons/short-button/GreenShortButton'
import YellowFullButton from '../../../../buttons/full-button/YellowFullButton'
import {Button} from '@mui/material'

const SingleRequestBox = ({
    userName,
    userRegNo,
    acceptedStatus,
    groupLeader,
    accessToActions,
    approveUser,
    rejectUser,
    userId,
}) => {
    const [changeStatus, setChangeStatus] = useState(acceptedStatus)

    const acceptingRequest = () => {
        setChangeStatus(true)
    }

    return (
        <div
            className={
                'mx-2 sm:mx-10 my-5 px-4 py-1.5 rounded-lg shadow-md bg-gray-50'
            }
        >
            <div className={'flex flex-row justify-between items-center'}>
                <div className={'flex flex-col gap-2'}>
                    <div className={'flex flex-row gap-2 items-center'}>
                        <div
                            className={
                                'text-sm lg:text-base text-blue-900 uppercase'
                            }
                        >
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
                <>
                    {accessToActions && (
                        <>
                            {changeStatus === 'approved' ? (
                                <>
                                    {userId === groupLeader ? (
                                        <YellowFullButton
                                            btnName={'This is you'}
                                        />
                                    ) : (
                                        <RedShortButton btnName={'Remove'} />
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className={'flex flex-row gap-2'}>
                                        <Button
                                            className={
                                                'h-8 text-sm lg:text-base'
                                            }
                                            color={'success'}
                                            variant="outlined"
                                            onClick={() => {
                                                approveUser(userId)
                                            }}
                                        >
                                            Accept
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                rejectUser(userId)
                                            }}
                                            className={
                                                'h-8 text-sm lg:text-base'
                                            }
                                            color={'error'}
                                            variant="outlined"
                                        >
                                            Reject
                                        </Button>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </>
            </div>
        </div>
    )
}

export default SingleRequestBox
