import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {Disclosure} from '@headlessui/react'
import {Button} from '@mui/material'

const ReceivedBubble = ({message, sender, isOpened}) => {
    return (
        <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg rounded-bl-none bg-gray-300 text-gray-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-400 border-none focus:outline-none focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-opacity-75">
                                    <span className={`text-base`}>
                                        {message}
                                    </span>
                                    <div className={`relative bottom-1 left-2`}>
                                        <RiArrowDropDownLine
                                            className={`${
                                                open
                                                    ? 'rotate-180 transform'
                                                    : ''
                                            } h-7 w-7 text-gray-600 `}
                                        />
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 grid gap-2 grid-cols-2 bg-gray-100 rounded-b-md">
                                    <Button
                                        color={'success'}
                                        variant={'outlined'}
                                    >
                                        Approve
                                    </Button>
                                    <Button
                                        color={'error'}
                                        variant={'outlined'}
                                    >
                                        Deny
                                    </Button>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-8 h-8 rounded-full order-1"
            />
        </div>
    )
}

export default ReceivedBubble
