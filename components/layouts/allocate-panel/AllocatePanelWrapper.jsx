import React from 'react'
import {MdGroups} from 'react-icons/md'
import GreenFullButton from '../../buttons/full-button/GreenFullButton'
import RedFullButton from '../../buttons/full-button/RedFullButton'

const AllocatePanelWrapper = ({children, btnFunction}) => {
    return (
        <div className={'px-6 py-6 grid grid-cols-1 gap-3'}>
            <GreenFullButton
                btnName={'Allocate Panel'}
                btnFunction={btnFunction}
            />
            <div className={'px-3 py-2 my-5 bg-gray-100 shadow rounded-lg'}>
                <div className={'flex flex-row justify-between items-center'}>
                    <div className={'flex flex-col gap-4'}>
                        <div>
                            <div className={'uppercase text-2xl font-semibold'}>
                                Research Topic
                            </div>
                            <div className={'text-blue-900'}>
                                - Noobcooders -
                            </div>
                        </div>
                        <div
                            className={
                                'flex flex-row gap-2 sm:gap-5 lg:gap-20 items-center'
                            }
                        >
                            <div className={'flex flex-col gap-2'}>
                                <div
                                    className={
                                        'flex flex-row gap-1 items-center'
                                    }
                                >
                                    <div
                                        className={
                                            'uppercase text-xs sm:text-sm'
                                        }
                                    >
                                        Group Leader Name:
                                    </div>
                                    <div
                                        className={
                                            'text-xs sm:text-sm text-gray-500'
                                        }
                                    >
                                        John Smith
                                    </div>
                                </div>
                                <div
                                    className={
                                        'flex flex-row gap-2 items-center'
                                    }
                                >
                                    <div
                                        className={
                                            'uppercase text-xs sm:text-sm'
                                        }
                                    >
                                        Reg Number:
                                    </div>
                                    <div
                                        className={
                                            'text-xs sm:text-sm text-gray-500'
                                        }
                                    >
                                        IT20227089
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col'}>
                                <div className={'uppercase text-xs sm:text-sm'}>
                                    Member Details:
                                </div>
                                <div
                                    className={
                                        'flex flex-col sm:flex-row gap-2'
                                    }
                                >
                                    <div className={'text-xs text-gray-500'}>
                                        Anne Venroy (IT20453793),
                                    </div>
                                    <div className={'text-xs text-gray-500'}>
                                        Martha Checkus (IT20216770),
                                    </div>
                                    <div className={'text-xs text-gray-500'}>
                                        Nichola Shenel (IT20154052),
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'pr-2 sm:pr-8'}>
                        <MdGroups
                            className={
                                'w-20 h-20 sm:w-24 sm:h-24 text-gray-600'
                            }
                        />
                    </div>
                </div>
            </div>
            {children}
            <RedFullButton btnName={'Remove Group'} />
        </div>
    )
}

export default AllocatePanelWrapper
