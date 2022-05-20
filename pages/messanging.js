import React, {useState} from 'react';
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from "framer-motion"
import {
    HiCalendar,
    HiHome,
    HiMap,
    HiMenu,
    HiSearchCircle,
    HiSpeakerphone,
    HiUserGroup,
    HiX,
} from 'react-icons/hi'
import {Avatar} from "@mui/material";
import Image from "next/image";

const navigation = [
    {name: 'Dashboard', href: '#', icon: HiHome, current: true},
    {name: 'Calendar', href: '#', icon: HiCalendar, current: false},
    {name: 'Teams', href: '#', icon: HiUserGroup, current: false},
    {name: 'Directory', href: '#', icon: HiSearchCircle, current: false},
    {name: 'Announcements', href: '#', icon: HiSpeakerphone, current: false},
    {name: 'Office Map', href: '#', icon: HiMap, current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Messanging() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className={`h-screen overflow-hidden `}>
            <div className="h-full overflow-hidden">
                <AnimatePresence>
                    {sidebarOpen && <motion.div
                        animate={{scale: 2}}
                        transition={{duration: 3}}
                    >
                        <Dialog
                            static
                            as={motion.div}
                            open={sidebarOpen} className="relative z-40 lg:hidden" onClose={(x) => {
                            setSidebarOpen(false)
                        }}>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                <div className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                            </motion.div>

                            <div className="fixed inset-0 flex z-40 ">
                                <motion.div
                                    initial={{opacity: 0, x: -200}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -300}}
                                >
                                    <Dialog.Panel
                                        className="relative flex-1 flex flex-col w-screen max-w-xs bg-white focus:outline-none h-screen ">
                                        <motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            transition={{delay: 0.3}}

                                        >
                                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                                <button
                                                    type="button"
                                                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border-none bg-gray-500"
                                                    onClick={() => setSidebarOpen(false)}
                                                >
                                                    <span className="sr-only">Close sidebar</span>
                                                    <HiX className="h-6 w-6 text-white" aria-hidden="true"/>
                                                </button>
                                            </div>
                                        </motion.div>
                                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                            <div className="flex-shrink-0 grid place-items-center ">
                                                <Image
                                                    src={"https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=128d14ab-d90c-4aa2-b021-4c46859ce9aa"}
                                                    width={250}
                                                    height={200}
                                                    alt="logo"/>
                                            </div>
                                            <nav aria-label="Sidebar" className="mt-5">
                                                <div className="px-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md no-underline'
                                                            )}
                                                        >
                                                            <item.icon
                                                                className={classNames(
                                                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                                    'mr-4 h-6 w-6'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                            <a href="#" className="flex-shrink-0 group block no-underline">
                                                <div className="flex items-center">
                                                    <div>
                                                        <Avatar alt="Remy Sharp"
                                                                src="https://image.shutterstock.com/image-photo/happy-dude-striped-top-glasses-260nw-1153500823.jpg"/>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                                                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </Dialog.Panel>
                                </motion.div>
                                <div className="flex-shrink-0 w-14" aria-hidden="true">
                                    {/* Force sidebar to shrink to fit close icon */}
                                </div>
                            </div>
                        </Dialog>
                    </motion.div>}
                </AnimatePresence>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:flex-shrink-0 h-screen">
                    <div className="flex flex-col w-64">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                <div className="grid place-items-center flex-shrink-0 px-4">
                                    <Image
                                        src={"https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=128d14ab-d90c-4aa2-b021-4c46859ce9aa"}
                                        width={250}
                                        height={200}
                                        alt="logo"/>
                                </div>
                                <nav className="mt-5 flex-1" aria-label="Sidebar">
                                    <div className="px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-200 text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md no-underline'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-3 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                <a href="#" className="flex-shrink-0 w-full group block no-underline">
                                    <div className="flex items-center">
                                        <div>
                                            <img
                                                className="inline-block h-9 w-9 rounded-full"
                                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Whitney
                                                Francis</p>
                                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View
                                                profile</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                    <div className="lg:hidden">
                        <div
                            className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                            <div>
                                <Image
                                    src={"https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF%20Square.png?alt=media&token=b6185e5e-7e8c-4771-93e9-813c3b7e1d8b"}
                                    width={80}
                                    height={80}
                                    alt="logo"/>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className=" h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 border-none"
                                    onClick={() => setSidebarOpen(true)}
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <HiMenu className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative z-0 flex overflow-hidden">
                        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                            {/* Start main area*/}
                            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                            </div>
                            {/* End main area */}
                        </main>
                        <aside
                            className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto">
                            {/* Start secondary column (hidden on smaller screens) */}
                            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg"/>
                            </div>
                            {/* End secondary column */}
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}
