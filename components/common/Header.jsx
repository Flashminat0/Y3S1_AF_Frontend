import React, {Fragment, useState} from 'react'
import {TbBell} from 'react-icons/tb'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {GrMenu} from 'react-icons/gr'
import {Menu, Popover, Transition} from '@headlessui/react'
import LoginWIthMicrosoft from '../../components/forms/auth/LoginWIthMicrosoft'
import {useLocalStorage} from '@mantine/hooks'

const userStaticData = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    role: 'supervisor',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigationStaticData = [
    {name: 'Home', href: '#', current: true},
    {name: 'Profile', href: '/common/profile', current: false},
    {name: 'Group List', href: '/student/group-list', current: false},
    {name: 'Chat', href: '/student/chat/', current: false},
    {name: 'User List', href: '/admin/user-list', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })
    const [user, setUser] = useState(userStaticData)
    const [navigation, setNavigation] = useState(navigationStaticData)

    return (
        <>
            <Popover
                as="header"
                className="pb-2 bg-gradient-to-r from-gray-600 to-indigo-600"
            >
                {({open}) => (
                    <>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                                {/* Logo */}
                                <div className="absolute left-0 py-2 flex-shrink-0 lg:static">
                                    <a href="#">
                                        <span className="sr-only">
                                            Workflow
                                        </span>
                                        {/* https://tailwindui.com/img/logos/workflow-mark-cyan-200.svg */}
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF%20Square.png?alt=media&token=b6185e5e-7e8c-4771-93e9-813c3b7e1d8b"
                                            alt="Logo"
                                            width={'125'}
                                            height={'100'}
                                            className={
                                                'w-16 h-16'
                                            }
                                        />
                                    </a>
                                </div>
                                {/*Website Name*/}
                                <div
                                    className={
                                        'ml-10 lg:ml-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-100 capitalize'
                                    }
                                >
                                    Research Labs
                                </div>

                                {/* Right section on desktop */}
                                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-2 lg:pr-0.5">
                                    <button
                                        type="button"
                                        className="shrink-none p-1 text-cyan-200 rounded-full hover:text-white bg-transparent focus:outline-none focus:ring-opacity-100 focus:ring-2 focus:ring-white"
                                    >
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <TbBell
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu
                                        as="div"
                                        className="ml-5 relative shrink-none"
                                    >
                                        <div>
                                            <LoginWIthMicrosoft
                                                credentials={credentials}
                                                setCredentials={setCredentials}
                                            />
                                        </div>
                                    </Menu>
                                </div>

                                <div className="w-full py-3 lg:border-t lg:border-white lg:border-opacity-20">
                                    <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                                        {/* Left nav */}
                                        <div className="hidden lg:block lg:col-span-2">
                                            <nav className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'text-white'
                                                                : 'text-cyan-100',
                                                            'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 no-underline hover:bg-opacity-10'
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? 'page'
                                                                : undefined
                                                        }
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                        <div className="px-12 md:px-0">
                                            {/* Search */}
                                            <div className="max-w-xs mx-auto w-full md:max-w-md">
                                                <label
                                                    htmlFor="search"
                                                    className="sr-only"
                                                >
                                                    Search
                                                </label>
                                                <div className="relative text-white focus-within:text-gray-600">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                        <AiOutlineSearch
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <input
                                                        id="search"
                                                        className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                                                        placeholder="Search"
                                                        type="search"
                                                        name="search"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Menu button */}
                                <div className="absolute right-0 flex-shrink-0 lg:hidden">
                                    {/* Mobile menu button */}
                                    <Popover.Button
                                        style={{boxShadow: 'none'}}
                                        elevation={0}
                                        className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none ring-offset-white ring-white focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-white"
                                    >
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <AiOutlineClose
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <GrMenu
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>

                        <Transition.Root as={Fragment}>
                            <div className="lg:hidden">
                                <Transition.Child
                                    as={Fragment}
                                    enter="duration-150 ease-out"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="duration-150 ease-in"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                                </Transition.Child>

                                <Transition.Child
                                    as={Fragment}
                                    enter="duration-150 ease-out"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="duration-150 ease-in"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Popover.Panel
                                        focus
                                        className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                                    >
                                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                                            <div className="pt-3 pb-2">
                                                <div className="flex items-center justify-between px-4">
                                                    <div>
                                                        <img
                                                            className="h-8 w-auto"
                                                            src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                                                            alt="Workflow"
                                                        />
                                                    </div>
                                                    <div className="-mr-2">
                                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                                            <span className="sr-only">
                                                                Close menu
                                                            </span>
                                                            <AiOutlineClose
                                                                className="h-6 w-6"
                                                                aria-hidden="true"
                                                            />
                                                        </Popover.Button>
                                                    </div>
                                                </div>
                                                <div className="mt-3 px-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium no-underline hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="pt-2 pb-6">
                                                <div className="flex items-center px-5">
                                                    <div className="inline-flex mx-auto mt-3 px-2 space-y-1">
                                                        <div>
                                                            <LoginWIthMicrosoft
                                                                credentials={
                                                                    credentials
                                                                }
                                                                setCredentials={
                                                                    setCredentials
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                                    >
                                                        <span className="sr-only">
                                                            View notifications
                                                        </span>
                                                        <TbBell
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition.Child>
                            </div>
                        </Transition.Root>
                    </>
                )}
            </Popover>
        </>
    )
}

export default Header
