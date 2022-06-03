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
    setOpenUpdate,
    setId,
}) => {
    return (
        <div
            className={
                'mx-2 my-4 rounded-lg bg-gray-50 px-4 py-1.5 shadow-md lg:mx-10'
            }
        >
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-row items-center gap-3'}>
                    <div className={'text-xl font-semibold uppercase'}>
                        {userName}
                    </div>
                    <MdGroup className={'h-5 w-5'} />
                </div>
                <div>
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open
                                            ? 'border-none bg-transparent outline-none'
                                            : 'border-none bg-transparent outline-none'
                                    )}
                                >
                                    <FiChevronDown
                                        className={
                                            'h-12 w-12 hover:text-gray-500'
                                        }
                                    />
                                </Popover.Button>
                                <AnimatePresence>
                                    <Popover.Panel className="absolute -right-[5rem] z-10 mt-1 w-screen max-w-max -translate-x-1/2 transform px-2 sm:px-0">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-opacity-5">
                                                <div className="relative bg-gray-200 py-3 sm:gap-8 sm:p-4">
                                                    {abilities.map(
                                                        (ability, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex w-full flex-row items-center justify-between gap-5 bg-white px-2 py-2 text-base text-gray-900 hover:bg-green-100 hover:font-medium"
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
                                                                        } else if (
                                                                            ability.id ==
                                                                            3
                                                                        ) {
                                                                            setOpenUpdate(
                                                                                true
                                                                            );
                                                                            setId(
                                                                                mongoID
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
                                                                        'h-5 w-5'
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
            <div className={'flex flex-row items-center gap-2'}>
                <div className={'font-medium text-blue-900'}>User Details:</div>
                <div className={'text-sm text-gray-500'}>{userRegNo}</div>
                {userRole === 'student' && (
                    <>
                        <div
                            className={
                                'rounded-lg bg-blue-200 px-3 py-1 text-xs text-blue-500'
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
                                'rounded-lg bg-red-200 px-3 py-1 text-xs text-red-500'
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
                                'rounded-lg bg-green-200 px-3 py-1 text-xs text-green-500'
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
                                'rounded-lg bg-orange-200 px-3 py-1 text-xs text-orange-500'
                            }
                        >
                            {userRole}
                        </div>
                    </>
                )}
                {userRole === 'admin' && (
                    <>
                        <div
                            className={
                                'rounded-lg bg-orange-200 px-3 py-1 text-xs text-red-500'
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
