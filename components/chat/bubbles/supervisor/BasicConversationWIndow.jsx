import React, {useEffect, useRef, useState} from 'react'
import {Input, InputAdornment, LinearProgress} from '@mui/material'
import SenderTextBubble from './text/SenderTextBubble'
import ReceivedBubble from './text/ReceivedTextBubble'
import {FiPaperclip} from 'react-icons/fi'
import {RiSendPlane2Fill} from 'react-icons/ri'
import SenderFileBubble from './file/SenderFileBubble'
import ReceivedFileBubble from './file/ReceivedFileBubble'
import {randomId, useLocalStorage} from '@mantine/hooks'
import {
    LoadingAnimation,
    NotOkAnimation,
    OkAnimation,
} from '../../../assets/animations'
import EditTextMessageModal from './EditTextMessageModal'
import {firebaseApp} from '../../../../firebase/base'
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage'
import axios from 'axios'

const BasicConversationWindow = ({receiver, conversation, approvalState}) => {
    const myRef = useRef(null)

    const [fetchMessageTrigger, setFetchMessageTrigger] = useState(1)
    const [scrollToDownTrigger, setScrollToDownTrigger] = useState(1)
    const [messageArray, setMessageArray] = useState([])

    useEffect(() => {
        myRef.current.scrollIntoView({block: 'end', behavior: 'smooth'})
    }, [scrollToDownTrigger])

    const scrollToDown = () => {
        setScrollToDownTrigger(scrollToDownTrigger + 1)
    }

    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

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
                        onChange={sendNewFileAsMessage}
                    />
                </label>
            </InputAdornment>
        )
    }

    const SendIcon = () => {
        return (
            <InputAdornment position={'end'}>
                <RiSendPlane2Fill
                    onClick={sendNewMessage}
                    className={`${
                        nowMessage.toString().trim().length > 0
                            ? 'text-indigo-500 cursor-pointer'
                            : 'text-gray-500 '
                    } text-xl hover:shadow-lg`}
                />
            </InputAdornment>
        )
    }

    useEffect(() => {
        const fetchMessages = async () => {
            await axios
                .post('/api/chat/fetch-message', {
                    studentId: receiver,
                    staffId: credentials._id,
                })
                .then((res) => {
                    setMessageArray(res.data.chat.messages)
                })
        }
        fetchMessages()
        setTimeout(() => {
            scrollToDown()
        }, 500)
    }, [fetchMessageTrigger])

    const [nowMessage, setNowMessage] = useState('')
    const sendNewMessage = async () => {
        if (!nowMessage.toString().trim().length > 0) {
            return
        }

        await axios
            .post('/api/chat/send-message', {
                studentId: receiver,
                staffId: credentials._id,
                messages: [
                    ...messageArray,
                    {
                        id: randomId().toString().split('-')[1],
                        sender: credentials._id,
                        message: nowMessage,
                        type: 'text',
                        time: new Date().toLocaleTimeString(),
                        requestingForApproval: false,
                        approvedState: null,
                    },
                ],
                approvedState: approvalState,
            })
            .then((res) => {
                setFetchMessageTrigger(fetchMessageTrigger + 1)
                scrollToDown()
            })
            .then((x) => {
                setTimeout(() => {
                    scrollToDown()
                }, 500)
            })

        // Cleanup
        scrollToDown()
        setNowMessage('')
    }

    const [uploading, setUploading] = useState(false)
    const [uploadingProgress, setUploadingProgress] = useState(0)
    const sendNewFileAsMessage = (e) => {
        const file = e.target.files[0]
        const storageRef = getStorage(firebaseApp)

        const fileName = `${Date.now()}-${file.name}`

        const fileRef = ref(storageRef, `files/${fileName}`)

        const uploadTask = uploadBytesResumable(fileRef, file)

        setUploading(true)

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setUploadingProgress(progress)
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused')
                        break
                    case 'running':
                        console.log('Upload is running')
                        break
                }
            },
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(async (url) => {
                        await axios
                            .post('/api/chat/send-message', {
                                studentId: credentials._id,
                                staffId: receiver,
                                messages: [
                                    ...messageArray,
                                    {
                                        id: randomId().toString().split('-')[1],
                                        sender: credentials._id,
                                        message: {
                                            file: fileName,
                                            url: url,
                                        },
                                        time: new Date().toLocaleTimeString(),
                                        type: 'file',
                                        requestingForApproval: false,
                                        approvedState: null,
                                    },
                                ],
                                approvedState: approvalState,
                            })
                            .then((res) => {
                                setFetchMessageTrigger(fetchMessageTrigger + 1)
                            })
                    })
                    .then((x) => {
                        scrollToDown()
                        setUploading(false)
                        setUploadingProgress(0)
                    })
            }
        )
    }

    const deleteMessage = async (id) => {
        setMessageArray(() => {
            return messageArray.filter((message) => message.id !== id)
        })

        await axios
            .post('/api/chat/send-message', {
                studentId: receiver,
                staffId: credentials._id,
                messages: messageArray.filter((message) => message.id !== id),
                approvedState: approvalState,
            })
            .then((res) => {
                setFetchMessageTrigger(fetchMessageTrigger + 1)
            })
    }

    const deleteFileMessage = (id, filename) => {
        const storageRef = getStorage(firebaseApp)
        const fileRef = ref(storageRef, `files/${filename}`)

        deleteObject(fileRef).then(() => {
            deleteMessage(id)
        })
    }

    const approveMessage = async (id) => {
        setMessageArray(() => {
            return messageArray.map((message) => {
                if (message.id === id && message.requestingForApproval) {
                    return {...message, approvedState: true}
                } else {
                    return message
                }
            })
        })

        await axios
            .post('/api/chat/send-message', {
                studentId: receiver,
                staffId: credentials._id,
                messages: messageArray.map((message) => {
                    if (message.id === id && message.requestingForApproval) {
                        return {...message, approvedState: true}
                    } else {
                        return message
                    }
                }),
                approvedState: approvalState,
            })
            .then((res) => {
                setFetchMessageTrigger(fetchMessageTrigger + 1)
            })
    }

    const disapproveMessage = async (id) => {
        setMessageArray(() => {
            return messageArray.map((message) => {
                if (message.id === id && message.requestingForApproval) {
                    return {...message, approvedState: false}
                } else {
                    return message
                }
            })
        })

        await axios
            .post('/api/chat/send-message', {
                studentId: receiver,
                staffId: credentials._id,
                messages: messageArray.map((message) => {
                    if (message.id === id && message.requestingForApproval) {
                        return {...message, approvedState: false}
                    } else {
                        return message
                    }
                }),
                approvedState: approvalState,
            })
            .then((res) => {
                setFetchMessageTrigger(fetchMessageTrigger + 1)
            })
    }

    const [elevateEditState, setElevateEditState] = useState(false)
    const [editMessage, setEditMessage] = useState('')
    const [editMessageId, setEditMessageId] = useState('')

    const editMessageModalOpenHandler = (id, message) => {
        setEditMessage(message)
        setEditMessageId(id)
        setElevateEditState(true)
    }

    const editMessageValueHandler = (value) => {
        setEditMessage(value)
    }

    const editMessageModalCloseHandler = () => {
        setElevateEditState(false)
        setEditMessage('')
        setEditMessageId('')
    }

    const editMessageHandler = async (id) => {
        setMessageArray(() => {
            return messageArray.map((message) => {
                if (message.id === id) {
                    if (message.id.toString().includes('-edited')) {
                        return {...message, message: editMessage}
                    } else {
                        return {
                            ...message,
                            id: id + '-edited',
                            message: editMessage,
                        }
                    }
                }
                return message
            })
        })

        await axios
            .post('/api/chat/send-message', {
                studentId: credentials._id,
                staffId: receiver,
                messages: messageArray.map((message) => {
                    if (message.id === id) {
                        if (message.id.toString().includes('-edited')) {
                            return {...message, message: editMessage}
                        } else {
                            return {
                                ...message,
                                id: id + '-edited',
                                message: editMessage,
                            }
                        }
                    }
                    return message
                }),
                approvedState: approvalState,
            })
            .then((res) => {
                setFetchMessageTrigger(fetchMessageTrigger + 1)
            })

        editMessageModalCloseHandler()
    }

    return (
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-full w-full">
            <div className="flex-none sm:items-center justify-between py-1 border-b-2 border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            {receiver}
                        </h2>
                    </div>
                    <div className=" mt-4 flex md:mt-0 md:ml-4 ">
                        {approvalState === 'pending' && (
                            <>
                                Pending Approval &nbsp;&nbsp;
                                <LoadingAnimation />
                            </>
                        )}
                        {approvalState === 'approved' && (
                            <>
                                Topic Approved &nbsp;&nbsp;
                                <OkAnimation />
                            </>
                        )}
                        {approvalState === 'rejected' && (
                            <>
                                Topic Rejected &nbsp;&nbsp;
                                <NotOkAnimation />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col space-y-4 p-3 overflow-y-auto">
                {messageArray.map((singleMessage, index) => {
                    return (
                        <div key={singleMessage.id}>
                            {singleMessage.sender === credentials._id ? (
                                <>
                                    {singleMessage.type === 'text' ? (
                                        <SenderTextBubble
                                            id={singleMessage.id}
                                            message={singleMessage.message}
                                            deleteMessage={deleteMessage}
                                            editMessageHandler={
                                                editMessageModalOpenHandler
                                            }
                                        />
                                    ) : (
                                        <SenderFileBubble
                                            id={singleMessage.id}
                                            file={singleMessage.message}
                                            deleteFileMessage={
                                                deleteFileMessage
                                            }
                                        />
                                    )}
                                </>
                            ) : (
                                <>
                                    {singleMessage.type === 'text' ? (
                                        <ReceivedBubble
                                            id={singleMessage.id}
                                            message={singleMessage.message}
                                            sender={singleMessage.sender}
                                            requestingForApproval={
                                                singleMessage.requestingForApproval
                                            }
                                            approvedState={
                                                singleMessage.approvedState
                                            }
                                            approveMessageHandler={
                                                approveMessage
                                            }
                                            disapproveMessageHandler={
                                                disapproveMessage
                                            }
                                        />
                                    ) : (
                                        <>
                                            <ReceivedFileBubble
                                                id={singleMessage.id}
                                                file={singleMessage.message}
                                                sender={singleMessage.sender}
                                                requestingForApproval={
                                                    singleMessage.requestingForApproval
                                                }
                                                approvedState={
                                                    singleMessage.approvedState
                                                }
                                                approveMessageHandler={
                                                    approveMessage
                                                }
                                                disapproveMessageHandler={
                                                    disapproveMessage
                                                }
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    )
                })}

                <div ref={myRef}></div>
                <EditTextMessageModal
                    view={elevateEditState}
                    message={editMessage}
                    messageId={editMessageId}
                    editMessageModalCloseHandler={editMessageModalCloseHandler}
                    editMessageHandler={editMessageHandler}
                    editMessageValueHandler={editMessageValueHandler}
                />
            </div>
            {uploading && (
                <>
                    <LinearProgress
                        variant="determinate"
                        color={'success'}
                        value={uploadingProgress}
                    />
                </>
            )}

            <Input
                value={nowMessage}
                startAdornment={<AttachmentsIcon />}
                endAdornment={<SendIcon />}
                className="flex-none w-[95%] p-3 m-3 lg:m-0"
                placeholder="Type a message..."
                autoFocus={true}
                onChange={(e) => setNowMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        sendNewMessage()
                    }
                }}
            />
        </div>
    )
}

export default BasicConversationWindow
