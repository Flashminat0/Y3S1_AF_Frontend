import React, {useEffect, useRef, useState} from 'react'
import {Divider, Input, InputAdornment} from '@mui/material'
import SenderTextBubble from './bubbles/text/SenderTextBubble'
import ReceivedBubble from './bubbles/text/RecivedTextBubble'
import {FiPaperclip} from 'react-icons/fi'
import {RiSendPlane2Fill} from 'react-icons/ri'
import SenderFileBubble from './bubbles/file/SenderFileBubble'

const BasicConversationWindow = ({receiver, status}) => {
    const myRef = useRef(null)

    const [userProfile, setUserProfile] = useState(receiver)

    useEffect(() => {
        myRef.current.scrollIntoView({block: 'end', behavior: 'smooth'})
    }, [])

    const AttachmentsIcon = () => {
        return (
            <InputAdornment position={'start'}>
                <label htmlFor="file-upload" className="cursor-pointer">
                    <FiPaperclip
                        className={`text-indigo-500 text-xl hover:shadow-lg`}
                    />
                    <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                    />
                </label>
            </InputAdornment>
        )
    }

    const SendIcon = () => {
        return (
            <InputAdornment position={'end'}>
                <RiSendPlane2Fill
                    className={`text-indigo-500 text-xl cursor-pointer`}
                />
            </InputAdornment>
        )
    }

    const [messageArray, setMessageArray] = useState([])
    useEffect(() => {
        setMessageArray(() => {
            return fakeMessages.map((message) => {
                return {...message, isOpened: false}
            })
        })
    }, [messageArray])

    return (
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-full w-full">
            <div className="flex-none sm:items-center justify-between py-1 border-b-2 border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            {userProfile}
                        </h2>
                    </div>
                    <div className=" mt-4 flex md:mt-0 md:ml-4 ">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col space-y-4 p-3 overflow-y-auto">
                {messageArray.map((singleMessage, index) => {
                    return (
                        <div key={singleMessage.id}>
                            {singleMessage.sender === 'Me' ? (
                                <SenderTextBubble
                                    message={singleMessage.message}
                                    sender={singleMessage.sender}
                                    isOpened={singleMessage.isOpened}
                                />
                            ) : (
                                <ReceivedBubble
                                    message={singleMessage.message}
                                    sender={singleMessage.sender}
                                    isOpened={singleMessage.isOpened}
                                />
                            )}
                        </div>
                    )
                })}
                <div ref={myRef}></div>
            </div>
            <Input
                startAdornment={<AttachmentsIcon />}
                endAdornment={<SendIcon />}
                className="flex-none w-[95%] p-3 m-3 lg:m-0"
                placeholder="Type a message..."
                autoFocus={true}
            />
        </div>
    )
}

export default BasicConversationWindow

const fakeMessages = [
    {
        id: 1,
        sender: 'Me',
        message: 'This is a sample message 1',
        time: new Date(),
    },
    {
        id: 2,
        sender: 'NotMe',
        message: 'This is a sample message 1',
        time: new Date(),
    },
    {
        id: 3,
        sender: 'Me',
        message: 'This is a sample message 1',
        time: new Date(),
    },
    {
        id: 4,
        sender: 'NotMe',
        message: 'This is a sample message 1',
        time: new Date(),
    },
    {
        id: 5,
        sender: 'NotMe',
        message: 'This is a sample message 1',
        time: new Date(),
    },
    {
        id: 6,
        sender: 'Me',
        message: 'This is a sample message 1',
        time: new Date(),
    },
    {
        id: 7,
        sender: 'Me',
        message: 'This is a sample message 1',
        time: new Date(),
    },
    {
        id: 8,
        sender: 'NotMe',
        message: 'This is a sample message 1',
        time: new Date(),
    },
]
