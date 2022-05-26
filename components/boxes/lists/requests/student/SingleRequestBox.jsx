import React, {useState} from 'react'
import {BsBoxArrowInLeft} from 'react-icons/bs'
import RedShortButton from '../../../../buttons/short-button/RedShortButton'
import GreenShortButton from '../../../../buttons/short-button/GreenShortButton'

const SingleRequestBox = ({userName, userRegNo, acceptedStatus}) => {
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
                {changeStatus === true ? (
                    <>
                        <RedShortButton btnName={'Remove'} />
                    </>
                ) : (
                    <>
                        <div className={'flex flex-row gap-2'}>
                            <GreenShortButton
                                btnName={'Accept'}
                                btnFunction={acceptingRequest}
                            />
                            <RedShortButton btnName={'Reject'} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default SingleRequestBox
