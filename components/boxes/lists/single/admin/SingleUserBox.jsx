import React from 'react';
import { MdGroup } from 'react-icons/md';
import { Popover, Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { Fragment } from 'react';
import { BsFillEyeFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

const abilities = [
    { id: 1, name: 'View User Profile', icon: BsFillEyeFill },
    {
        id: 2,
        name: 'Delete User',
        icon: AiFillDelete,
    },
    {
        id: 3,
        name: 'Update User Role',
        icon: BsFillEyeFill,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const SingleUserBox = ({
    userName,
    userRegNo,
    userRole,
    deleteUser,
    mongoID,
    trigger,
    setTrigger,
}) => {
    return (
        <div
            className={
                'mx-2 lg:mx-10 my-4 px-4 py-1.5 rounded-lg shadow-md bg-gray-50'
            }
        >
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-row gap-3 items-center'}>
                    <div className={'text-xl font-semibold uppercase'}>
                        {userName}
                    </div>
                    <MdGroup className={'w-5 h-5'} />
                </div>
                <div>
                    <Popover className="relative">
                        {({ open }) => (
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
                                    <Popover.Panel className="absolute z-10 -right-[5rem] transform -translate-x-1/2 mt-1 px-2 w-screen max-w-max sm:px-0">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <div className="rounded-lg shadow-lg ring-1 ring-opacity-5 overflow-hidden">
                                                <div className="relative bg-gray-200 py-3 sm:gap-8 sm:p-4">
                                                    {abilities.map(
                                                        (ability, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex flex-row gap-5 justify-between items-center w-full px-2 py-2 text-base hover:font-medium text-gray-900 bg-white hover:bg-green-100"
                                                            >
                                                                <div
                                                                    onClick={() => {
                                                                        if (
                                                                            ability.id ==
                                                                            2
                                                                        ) {
                                                                            deleteUser(
                                                                                mongoID
                                                                            );
                                                                            setTrigger(
                                                                                trigger +
                                                                                    1
                                                                            );
                                                                        }
                                                                    }}
                                                                >
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
            <div className={'flex flex-row gap-2 items-center'}>
                <div className={'font-medium text-blue-900'}>User Details:</div>
                <div className={'text-sm text-gray-500'}>{userRegNo}</div>
                {userRole === 'student' && (
                    <>
                        <div
                            className={
                                'text-xs text-blue-500 px-3 py-1 rounded-lg bg-blue-200'
                            }
                        >
                            {userRole}
                        </div>
                    </>
                )}{' '}
                {userRole === 'supervisor' && (
                    <>
                        <div
                            className={
                                'text-xs text-red-500 px-3 py-1 rounded-lg bg-red-200'
                            }
                        >
                            {userRole}
                        </div>
                    </>
                )}
                {userRole === 'co-supervisor' && (
                    <>
                        <div
                            className={
                                'text-xs text-green-500 px-3 py-1 rounded-lg bg-green-200'
                            }
                        >
                            {userRole}
                        </div>
                    </>
                )}
                {userRole === 'panel-member' && (
                    <>
                        <div
                            className={
                                'text-xs text-orange-500 px-3 py-1 rounded-lg bg-orange-200'
                            }
                        >
                            {userRole}
                        </div>
                    </>
                )}
                {userRole === 'Admin' && (
                    <>
                        <div
                            className={
                                'text-xs text-red-500 px-3 py-1 rounded-lg bg-orange-200'
                            }
                        >
                            {userRole}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SingleUserBox;
