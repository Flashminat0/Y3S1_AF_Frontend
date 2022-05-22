import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiUserGroup, HiX } from 'react-icons/hi'
import { GiBadGnome, GiDevilMask } from 'react-icons/gi'
import { Divider } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

const navigation = [
    {
        name: 'Supervisors',
        href: 'supervisors',
        icon: GiDevilMask,
        approved: false,
        selected: false,
    },
    {
        name: 'Co-Supervisors',
        href: 'co-supervisors',
        icon: GiBadGnome,
        approved: true,
        selected: false,
    },
    {
        name: 'Team',
        href: 'team',
        icon: HiUserGroup,
        approved: false,
        selected: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const BaseChatWrapper = ({
    children,
    selectedPageIndex,
    selectedType,
    dataID,
    hoveringUserId,
}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const router = useRouter()

    return (
        <div className="h-screen overflow-hidden">
            <>
                <div className="h-full flex">
                    <AnimatePresence>
                        {sidebarOpen && (
                            <motion.div
                                animate={{ scale: 2 }}
                                transition={{ duration: 3 }}
                            >
                                <Dialog
                                    static
                                    as={motion.div}
                                    open={sidebarOpen}
                                    className="relative z-40 lg:hidden"
                                    onClose={(x) => {
                                        setSidebarOpen(false)
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                                    </motion.div>

                                    <div className="fixed inset-0 flex z-40 ">
                                        <motion.div
                                            initial={{ opacity: 0, x: -200 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -300 }}
                                        >
                                            <Dialog.Panel className="relative flex-1 flex flex-col w-screen max-w-xs bg-white focus:outline-none h-screen ">
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                                        <button
                                                            type="button"
                                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border-none bg-gray-500"
                                                            onClick={() =>
                                                                setSidebarOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            <span className="sr-only">
                                                                Close sidebar
                                                            </span>
                                                            <HiX
                                                                className="h-6 w-6 text-white"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                                    <div className="flex-shrink-0 grid place-items-center ">
                                                        <Image
                                                            src={
                                                                'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=128d14ab-d90c-4aa2-b021-4c46859ce9aa'
                                                            }
                                                            width={250}
                                                            height={200}
                                                            alt="logo"
                                                        />
                                                    </div>
                                                    <nav
                                                        aria-label="Sidebar"
                                                        className="mt-5"
                                                    >
                                                        <div className="px-2 space-y-1">
                                                            {navigation.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <motion.div
                                                                            whileHover={{
                                                                                scale: 1.05,
                                                                            }}
                                                                            whileTap={{
                                                                                scale: 0.95,
                                                                            }}
                                                                        >
                                                                            <span
                                                                                onClick={async () => {
                                                                                    await router.push(
                                                                                        `/chat/${item.href}`
                                                                                    )
                                                                                }}
                                                                                className={classNames(
                                                                                    selectedPageIndex ===
                                                                                        index
                                                                                        ? 'bg-gray-100 text-gray-900 font-normal '
                                                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md no-underline cursor-pointer'
                                                                                )}
                                                                            >
                                                                                <item.icon
                                                                                    className={classNames(
                                                                                        selectedPageIndex ===
                                                                                            index
                                                                                            ? 'text-gray-500'
                                                                                            : 'text-gray-400 group-hover:text-gray-500',
                                                                                        'mr-4 h-8 w-8'
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </span>
                                                                            {index ===
                                                                                1 && (
                                                                                <Divider
                                                                                    className={`pt-2`}
                                                                                    variant="fullWidth"
                                                                                />
                                                                            )}
                                                                        </motion.div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </nav>
                                                </div>
                                                <div className="flex-shrink-0 flex border-t border-gray-200 p-4 bg-gray-200">
                                                    <span className="flex-shrink-0 w-full group block no-underline">
                                                        <div className="grid grid-cols-3">
                                                            <div
                                                                className={`relative left-4`}
                                                            >
                                                                <span className="inline-block relative">
                                                                    <img
                                                                        className="h-12 w-12 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                        alt=""
                                                                    />
                                                                    <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400" />
                                                                </span>
                                                            </div>
                                                            <div className="ml-3 relative col-span-2 bottom-1 right-4">
                                                                <p className="text-md font-medium text-gray-700 group-hover:text-gray-900 relative bottom-2">
                                                                    Tom Cook
                                                                </p>
                                                                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700 absolute top-5 w-max ">
                                                                    View profile
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </Dialog.Panel>
                                        </motion.div>
                                        <div
                                            className="flex-shrink-0 w-14"
                                            aria-hidden="true"
                                        >
                                            {/* Force sidebar to shrink to fit close icon */}
                                        </div>
                                    </div>
                                </Dialog>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Static sidebar for desktop */}
                    <div className="hidden lg:flex lg:flex-shrink-0">
                        <div className="flex flex-col w-64">
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                    <div className="flex items-center flex-shrink-0 px-4">
                                        <Image
                                            src={
                                                'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=128d14ab-d90c-4aa2-b021-4c46859ce9aa'
                                            }
                                            width={250}
                                            height={200}
                                            alt="logo"
                                        />
                                    </div>
                                    <nav
                                        className="mt-5 flex-1"
                                        aria-label="Sidebar"
                                    >
                                        <div className="px-2 space-y-1">
                                            {navigation.map((item, index) => (
                                                <div key={index}>
                                                    <span
                                                        onClick={async () => {
                                                            await router.push(
                                                                `/chat/${item.href}`
                                                            )
                                                        }}
                                                        className={classNames(
                                                            selectedPageIndex ===
                                                                index
                                                                ? 'bg-gray-100 text-gray-900 font-normal'
                                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                            'group flex items-center px-2 py-2 text-base font-medium rounded-md no-underline cursor-pointer'
                                                        )}
                                                    >
                                                        <item.icon
                                                            className={classNames(
                                                                selectedPageIndex ===
                                                                    index
                                                                    ? 'text-gray-500'
                                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                                'mr-4 h-8 w-8'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </span>
                                                    {index === 1 && (
                                                        <Divider
                                                            variant="fullWidth"
                                                            className={`pt-2`}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                                <div className="flex-shrink-0 flex border-t border-gray-200 p-4 bg-gray-200">
                                    <span className="flex-shrink-0 w-full group block no-underline">
                                        <div className="grid grid-cols-3">
                                            <div className={`relative left-2`}>
                                                <span className="inline-block relative">
                                                    <img
                                                        className="h-12 w-12 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                    <span className="absolute bottom-1 right-1 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400" />
                                                </span>
                                            </div>
                                            <div className="ml-3 relative col-span-2 bottom-1 right-2">
                                                <p className="text-md font-medium text-gray-700 group-hover:text-gray-900 relative bottom-2">
                                                    Tom Cook
                                                </p>
                                                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700 absolute top-5 w-max ">
                                                    View profile
                                                </p>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                        <div className="lg:hidden">
                            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                                <div>
                                    <Image
                                        src={
                                            'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF%20Square.png?alt=media&token=b6185e5e-7e8c-4771-93e9-813c3b7e1d8b'
                                        }
                                        width={80}
                                        height={80}
                                        alt="logo"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="border-none h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                                        onClick={() => setSidebarOpen(true)}
                                    >
                                        <span className="sr-only">
                                            Open sidebar
                                        </span>
                                        <HiMenu
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative z-0 flex overflow-hidden ">
                            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                                {/* Start main area*/}
                                <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                                    <div className="h-full border-2 border-gray-200 border-dashed rounded-lg w-full flex">
                                        {children}
                                    </div>
                                </div>
                                {/* End main area */}
                            </main>
                            <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200 overflow-y-auto">
                                {/* Start secondary column (hidden on smaller screens) */}

                                <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                                    <div className="h-full border-2 border-gray-200 border-dashed rounded-lg">
                                        {selectedType}
                                        {dataID}
                                        {hoveringUserId && (
                                            <div>{hoveringUserId}</div>
                                        )}
                                    </div>
                                </div>
                                {/* End secondary column */}
                            </aside>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default BaseChatWrapper
