import React, {useState} from 'react'
import {BsPersonBoundingBox} from 'react-icons/bs'
import GreenFullButton from '../../buttons/full-button/GreenFullButton'
import {useDidUpdate} from '@mantine/hooks'
import axios from 'axios'

const FinalizeGroupWrapper = ({
    children,
    btnFunction,
    groupLeader,
    groupTopic,
}) => {
    const [groupLeaderID, setGroupLeaderID] = useState('')
    const [groupLeaderName, setGroupLeaderName] = useState('')
    const [groupLeaderImg, setGroupLeaderImg] = useState('')

    useDidUpdate(async () => {
        if (groupLeader === '') return
        await axios
            .get('/api/users/get-user-data-from-id', {
                params: {
                    userId: groupLeader,
                },
            })
            .then((res) => {
                const leaderName = res.data.name

                setGroupLeaderID(
                    leaderName
                        .substring(
                            leaderName.lastIndexOf(' ') + 1,
                            leaderName.length
                        )
                        .toString()
                        .toUpperCase()
                )
                setGroupLeaderName(
                    leaderName
                        .substring(0, leaderName.lastIndexOf(' '))
                        .toString()
                        .toUpperCase()
                )
                setGroupLeaderImg(res.data.image)
            })
    }, [groupLeader])

    return (
        <div className={'px-6 py-6 grid grid-cols-1 gap-3'}>
            <GreenFullButton
                btnName={'Finalize Group'}
                btnFunction={btnFunction}
            />
            <div className={'px-3 py-2 mt-5 bg-gray-100 shadow rounded-lg'}>
                <div className={'flex flex-row justify-between items-center'}>
                    <div className={'flex flex-col gap-1'}>
                        <p className={'uppercase text-lg font-semibold'}>
                            {groupTopic}
                        </p>
                        <div className={'flex flex-row gap-2 items-center'}>
                            <div className={'uppercase text-base'}>Name:</div>
                            <div className={'text-sm text-gray-500'}>
                                {groupLeaderName}
                            </div>
                        </div>
                        <div className={'flex flex-row gap-2 items-center'}>
                            <div className={'uppercase text-base'}>
                                Registered Number:
                            </div>
                            <div className={'text-sm text-gray-500'}>
                                {groupLeaderID}
                            </div>
                        </div>
                    </div>
                    <div className={'pr-8'}>
                        <img
                            src={groupLeaderImg.url}
                            alt={groupLeaderImg.name}
                            className={
                                'w-20 h-20 lg:w-24 lg:h-24 text-gray-600'
                            }
                        />
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default FinalizeGroupWrapper
