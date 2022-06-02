import React, {Fragment, useState} from 'react';
import {TbBell} from 'react-icons/tb';
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';
import {GrMenu} from 'react-icons/gr';
import {Menu, Popover, Transition} from "@headlessui/react";

const userStaticData = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    role: 'Human Resources Manager',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigationStaticData = [
    {name: 'Home', href: '#', current: true},
    {name: 'Profile', href: '#', current: false},
    {name: 'Resources', href: '#', current: false},
    {name: 'Company Directory', href: '#', current: false},
    {name: 'Openings', href: '#', current: false},
]
const userNavigationStaticData = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const HomePage = () => {
    const [user, setUser] = useState(userStaticData);
    const [navigation, setNavigation] = useState(navigationStaticData);
    const [userNavigation, setUserNavigation] = useState(userNavigationStaticData);

    return (
        <>
            <Popover as="header" className="pb-4 bg-gradient-to-r from-sky-800 to-cyan-600">
                {({open}) => (
                    <>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                                {/* Logo */}
                                <div className="absolute left-0 py-5 flex-shrink-0 lg:static">
                                    <a href="#">
                                        <span className="sr-only">Workflow</span>
                                        {/* https://tailwindui.com/img/logos/workflow-mark-cyan-200.svg */}
                                        <svg className="h-8 w-auto" fill="none" viewBox="0 0 35 32"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill="#A5F3FC"
                                                d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                {/* Right section on desktop */}
                                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                                    <button
                                        type="button"
                                        className="shrink-none p-1 text-cyan-200 rounded-full hover:text-white bg-transparent focus:outline-none focus:ring-opacity-100 focus:ring-2 focus:ring-white"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <TbBell className="h-6 w-6" aria-hidden="true"/>
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-5 relative shrink-none">
                                        <div>
                                            <Menu.Button
                                                className="bg-transparent p-0.5 rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt=""/>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({active}) => (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700 no-underline'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>

                                <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                                    <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                                        {/* Left nav */}
                                        <div className="hidden lg:block lg:col-span-2">
                                            <nav className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'text-white' : 'text-cyan-100',
                                                            'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 no-underline hover:bg-opacity-10'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                        <div className="px-12 md:px-0">
                                            {/* Search */}
                                            <div className="max-w-xs mx-auto w-full md:max-w-md">
                                                <label htmlFor="search" className="sr-only">
                                                    Search
                                                </label>
                                                <div className="relative text-white focus-within:text-gray-600">
                                                    <div
                                                        className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                        <AiOutlineSearch className="h-5 w-5" aria-hidden="true"/>
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
                                        style={{boxShadow: 'none'}} elevation={0}
                                        className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none ring-offset-white ring-white focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <AiOutlineClose className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <GrMenu className="block h-6 w-6" aria-hidden="true"/>
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
                                    <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25"/>
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
                                        <div
                                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
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
                                                        <Popover.Button
                                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                                            <span className="sr-only">Close menu</span>
                                                            <AiOutlineClose className="h-6 w-6" aria-hidden="true"/>
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
                                            <div className="pt-4 pb-2">
                                                <div className="flex items-center px-5">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl}
                                                             alt=""/>
                                                    </div>
                                                    <div className="ml-3 min-w-0 flex-1">
                                                        <div
                                                            className="text-base font-medium text-gray-800 truncate">{user.name}</div>
                                                        <div
                                                            className="text-sm font-medium text-gray-500 truncate">{user.email}</div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                                    >
                                                        <span className="sr-only">View notifications</span>
                                                        <TbBell className="h-6 w-6" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                                <div className="mt-3 px-2 space-y-1">
                                                    {userNavigation.map((item) => (
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
                                        </div>
                                    </Popover.Panel>
                                </Transition.Child>
                            </div>
                        </Transition.Root>
                    </>
                )}
            </Popover>
        </>
    );
};

export default HomePage;