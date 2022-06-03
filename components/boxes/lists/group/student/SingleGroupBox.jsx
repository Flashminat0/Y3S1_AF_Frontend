import React, {useState} from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {Popover, Transition} from '@headlessui/react'
import {BiArrowFromLeft} from 'react-icons/bi'
import {MdGroup} from 'react-icons/md'
import {AnimatePresence, motion} from 'framer-motion'

const abilities = [
    {id: 1, name: 'Request to be a member', after: 'Requested', icon: BiArrowFromLeft, status: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SingleGroupBox = ({
                            requestForJoinOnGroupHandler,
                            groupId,
                            groupName,
                            groupLeader,
                            groupLeaderRegNo,
                            currentNo,
                        }) => {
    const [status, setStatus] = useState(abilities.status);

    const requestForJoinOnGroup = () => {
        requestForJoinOnGroupHandler(groupId);
        setStatus(!status);
    }

    return (
        <div
            className={
                'mx-0 lg:mx-10 my-4 px-2 lg:px-4 py-1.5 rounded-lg shadow-md bg-gray-50'
            }
        >
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-row gap-3 items-center'}>
                    <div className={'text-xl font-semibold uppercase'}>
                        {groupName}
                    </div>
                    <MdGroup className={'w-5 h-5'}/>
                </div>
                <div>
                    <Popover className="relative">
                        {({open}) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open
                                            ? 'outline-none border-none bg-transparent'
                                            : 'outline-none border-none bg-transparent'
                                    )}
                                >
                                    <FiChevronDown
                                        className={
                                            'w-12 h-12 hover:text-gray-500'
                                        }
                                    />
                                </Popover.Button>
                                <AnimatePresence>
                                    <Popover.Panel
                                        className="absolute z-10 -right-[5rem] transform -translate-x-1/2 mt-1 px-2 w-screen max-w-max sm:px-0">
                                        <motion.div
                                            initial={{opacity: 0, scale: 0.7}}
                                            animate={{opacity: 1, scale: 1}}
                                        >
                                            <div className="rounded-lg shadow-lg ring-1 ring-opacity-5 overflow-hidden">
                                                <div className="relative bg-gray-200 py-3 sm:gap-8 sm:p-4">
                                                    {abilities.map(
                                                        (ability, index) => (
                                                            <div
                                                                onClick={
                                                                    requestForJoinOnGroup
                                                                }
                                                                key={index}
                                                                className="flex flex-row gap-5 justify-between gap-2 items-center w-full px-2 py-2 text-base hover:font-medium text-gray-900 bg-white hover:bg-green-100 cursor-pointer"
                                                            >
                                                                <div>
                                                                    {status === true ? <>
                                                                        {
                                                                            ability.after
                                                                        }
                                                                    </> : <>
                                                                        {
                                                                            ability.name
                                                                        }
                                                                    </>}
                                                                </div>
                                                                <ability.icon
                                                                    className={
                                                                        'w-5 h-5'
                                                                    }
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Popover.Panel>
                                </AnimatePresence>
                            </>
                        )}
                    </Popover>
                </div>
            </div>
            <div className={'flex flex-row justify-between items-center'}>
                <div className={'flex flex-row gap-0.5 lg:gap-2 items-center'}>
                    <div
                        className={
                            'text-sm sm:text-base font-medium text-blue-900'
                        }
                    >
                        Group Leader:
                    </div>
                    <div className={'text-xs sm:text-sm text-gray-500'}>
                        {groupLeader}
                    </div>
                    <div className={'text-xs sm:text-sm text-gray-500'}>
                        ({groupLeaderRegNo})
                    </div>
                </div>
                <div
                    className={
                        'px-2.5 py-0.5 text-sm rounded-xl bg-indigo-100 hover:bg-indigo-200 font-medium'
                    }
                >
                    <span className={'text-sm text-gray-500'}>{currentNo}</span>
                    /4
                </div>
            </div>
        </div>
    )
}

export default SingleGroupBox
