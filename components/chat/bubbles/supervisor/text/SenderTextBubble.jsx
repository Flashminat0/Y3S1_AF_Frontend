import React from 'react'
import {Disclosure} from '@headlessui/react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {Button} from '@mui/material'

//we are sending this message
const SenderTextBubble = ({id, message, deleteMessage, editMessageHandler}) => {
    return (
        <div className="flex items-end justify-end group">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg rounded-br-none bg-indigo-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-indigo-700 border-none focus:outline-none focus-visible:ring focus-visible:ring-indigo-600 focus-visible:ring-opacity-75">
                                    <span className={`text-base`}>
                                        {message}
                                        <span
                                            className={`text-xs text-gray-300`}
                                        >
                                            {id
                                                .toString()
                                                .includes('-edited') && (
                                                <div>(edited)</div>
                                            )}
                                        </span>
                                    </span>
                                    <div className={`relative bottom-1 left-2`}>
                                        <RiArrowDropDownLine
                                            className={`${
                                                open
                                                    ? 'rotate-180 transform'
                                                    : ''
                                            } h-7 w-7 text-white flex-none`}
                                        />
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 grid gap-2 grid-cols-2 bg-gray-100 rounded-b-md">
                                    <Button
                                        color={'primary'}
                                        variant={'outlined'}
                                        onClick={() =>
                                            editMessageHandler(id, message)
                                        }
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            deleteMessage(id)
                                        }}
                                        color={'error'}
                                        variant={'outlined'}
                                    >
                                        Delete
                                    </Button>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-8 h-8 rounded-full order-2"
            />
        </div>
    )
}

export default SenderTextBubble
