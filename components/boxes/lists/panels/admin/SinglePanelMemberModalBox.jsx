import React from 'react'
import {BsFileEarmarkPerson} from 'react-icons/bs'
import {Popover} from '@headlessui/react'
import {FiChevronDown} from 'react-icons/fi'
import {AnimatePresence, motion} from 'framer-motion'
import {FaAddressCard} from 'react-icons/fa'

const abilities = [
    {id: 1, name: 'Add this member to the panel', icon: FaAddressCard},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SinglePanelMemberModalBox = ({panelMemberName, panelMemberRegNo}) => {
    return (
        <div
            className={
                'mx-0 lg:mx-4 my-4 px-2 lg:px-4 py-1.5 rounded-lg shadow-md bg-gray-50'
            }
        >
            <div className={'flex flex-row justify-between items-center'}>
                <div className={'flex flex-col gap-2'}>
                    <div className={'flex flex-row gap-2 items-center'}>
                        <div className={'text-blue-900 uppercase'}>
                            Panel Member Info:
                        </div>
                        <BsFileEarmarkPerson
                            className={'w-5 h-5 text-blue-900'}
                        />
                    </div>
                    <div className={'flex flex-row gap-1 items-center'}>
                        <div className={'text-sm text-gray-800'}>
                            {panelMemberName}
                        </div>
                        <div className={'text-sm text-gray-500'}>
                            - {panelMemberRegNo}
                        </div>
                    </div>
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
                                    <Popover.Panel className="absolute z-10 top-[2rem] -right-[7rem] transform -translate-x-1/2 mt-1 px-2 w-screen max-w-max sm:px-0">
                                        <motion.div
                                            initial={{opacity: 0, scale: 0.7}}
                                            animate={{opacity: 1, scale: 1}}
                                        >
                                            <div className="rounded-lg shadow-lg ring-1 ring-opacity-5 overflow-hidden">
                                                <div className="relative bg-gray-200 py-3 sm:gap-8 sm:p-4">
                                                    {abilities.map(
                                                        (ability, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex flex-row gap-5 justify-between gap-2 items-center w-full px-2 py-2 text-base hover:font-medium text-gray-900 bg-white hover:bg-green-100"
                                                            >
                                                                <div>
                                                                    {
                                                                        ability.name
                                                                    }
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
        </div>
    )
}

export default SinglePanelMemberModalBox
