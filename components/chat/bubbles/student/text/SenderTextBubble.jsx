import React from 'react'
import {Disclosure} from '@headlessui/react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {Button} from '@mui/material'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function generateStylesOnSender(approvedState, requestingForApproval) {
    let baseStyles =
        'flex w-full justify-between rounded-lg rounded-br-none px-4 py-2 text-left text-sm font-medium text-white border-none focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 '

    if (approvedState === null) {
        if (requestingForApproval === true) {
            baseStyles =
                baseStyles +
                'bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-600'
        } else if (requestingForApproval === false) {
            baseStyles =
                baseStyles +
                'bg-indigo-500 hover:bg-indigo-700 focus-visible:ring-indigo-600'
        }
    } else if (approvedState === true) {
        baseStyles =
            baseStyles +
            'bg-green-500 hover:bg-green-600 focus-visible:ring-green-600'
    } else if (approvedState === false) {
        baseStyles =
            baseStyles +
            'bg-red-600 hover:bg-red-700 focus-visible:ring-red-600'
    }

    return baseStyles
}

const SenderTextBubble = ({
    id,
    message,
    approvedState,
    requestingForApproval,
    deleteMessage,
    requestForApprovalHandler,
    editMessageHandler,
}) => {
    return (
        <div className="flex items-end justify-end group">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className={generateStylesOnSender(
                                        approvedState,
                                        requestingForApproval
                                    )}
                                >
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
                                    <span className={`col-span-2`}>
                                        {approvedState === null ? (
                                            <>
                                                <Button
                                                    disabled={
                                                        requestingForApproval
                                                    }
                                                    className={`bg-indigo-600 hover:bg-indigo-700`}
                                                    fullWidth={true}
                                                    variant={'contained'}
                                                    onClick={() => {
                                                        requestForApprovalHandler(
                                                            id
                                                        )
                                                    }}
                                                >
                                                    {requestingForApproval
                                                        ? 'Requested for approval'
                                                        : 'Ask for Approval'}
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button
                                                    className={`${
                                                        approvedState
                                                            ? 'bg-green-600 hover:bg-green-700'
                                                            : 'bg-red-600 hover:bg-red-700'
                                                    }`}
                                                    fullWidth={true}
                                                    variant={'contained'}
                                                >
                                                    {approvedState
                                                        ? 'Approved'
                                                        : 'Rejected'}
                                                </Button>
                                            </>
                                        )}
                                    </span>
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
