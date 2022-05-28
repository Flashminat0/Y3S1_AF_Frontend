import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {Disclosure} from '@headlessui/react'
import {Button} from '@mui/material'
import {useClipboard} from '@mantine/hooks'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function generateStylesOnReceiver(approvedState, requestingForApproval) {

    let baseStyles = ' flex w-full justify-between rounded-lg rounded-bl-none text-gray-600 px-4 py-2 text-left text-sm font-medium text-white border-none focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'

    if (approvedState === null) {
        if (requestingForApproval === true) {
            baseStyles = baseStyles + ' bg-blue-200 hover:bg-blue-300 focus-visible:ring-blue-200'
        } else if (requestingForApproval === false) {
            baseStyles = baseStyles + ' bg-gray-300 hover:bg-gray-400 focus-visible:ring-gray-300'
        }
    } else if (approvedState === true) {
        baseStyles = baseStyles + ' bg-green-200 hover:bg-green-300 focus-visible:ring-green-200'
    } else if (approvedState === false) {
        baseStyles = baseStyles + ' bg-red-200 hover:bg-red-300 focus-visible:ring-red-200'
    }

    return baseStyles

}

const ReceivedBubble = ({
                            id,
                            message,
                            sender,
                            approvedState,
                            approveMessageHandler,
                            disapproveMessageHandler,
                            requestingForApproval,
                        }) => {
    const clipboard = useClipboard({timeout: 800})

    return (
        <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className={generateStylesOnReceiver(approvedState, requestingForApproval)}
                                >
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
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-sm text-gray-500 grid gap-2 grid-cols-2 bg-gray-100 rounded-b-md">
                                    <Button
                                        className={`col-span-2`}
                                        fullWidth={true}
                                        color={'primary'}
                                        variant={
                                            clipboard.copied
                                                ? 'contained'
                                                : 'outlined'
                                        }
                                        onClick={() =>
                                            clipboard.copy(
                                                `${sender} said : ${message}`
                                            )
                                        }
                                    >
                                        {clipboard.copied
                                            ? 'Copied !'
                                            : 'Copy Quote'}
                                    </Button>
                                    {requestingForApproval && (
                                        <>
                                            {approvedState === null ? (
                                                <>
                                                    <Button
                                                        className={`col-span-1`}
                                                        fullWidth={true}
                                                        color={'success'}
                                                        variant={'outlined'}
                                                        onClick={() =>
                                                            approveMessageHandler(
                                                                id
                                                            )
                                                        }
                                                    >
                                                        Approve
                                                    </Button>
                                                    <Button
                                                        className={`col-span-1`}
                                                        fullWidth={true}
                                                        color={'error'}
                                                        variant={'outlined'}
                                                        onClick={() =>
                                                            disapproveMessageHandler(
                                                                id
                                                            )
                                                        }
                                                    >
                                                        Reject
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button
                                                        className={`col-span-2`}
                                                        fullWidth={true}
                                                        color={
                                                            approvedState
                                                                ? 'success'
                                                                : 'error'
                                                        }
                                                        variant={'contained'}
                                                    >
                                                        {approvedState
                                                            ? 'Approved'
                                                            : 'Rejected'}
                                                    </Button>
                                                </>
                                            )}
                                        </>
                                    )}
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
