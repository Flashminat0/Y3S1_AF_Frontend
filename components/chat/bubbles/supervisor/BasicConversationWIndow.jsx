import React, {useEffect, useRef, useState} from 'react'
import {Input, InputAdornment, LinearProgress} from '@mui/material'
import SenderTextBubble from './text/SenderTextBubble'
import ReceivedBubble from './text/ReceivedTextBubble'
import {FiPaperclip} from 'react-icons/fi'
import {RiSendPlane2Fill} from 'react-icons/ri'
import SenderFileBubble from './file/SenderFileBubble'
import ReceivedFileBubble from './file/ReceivedFileBubble'
import {randomId, useLocalStorage} from '@mantine/hooks'
import {LoadingAnimation, NotOkAnimation, OkAnimation,} from '../../../assets/animations'
import EditTextMessageModal from './EditTextMessageModal'
import {firebaseApp} from '../../../../firebase/base'
import {deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable,} from 'firebase/storage'

const BasicConversationWindow = ({receiver, conversation, approvalState}) => {
    const myRef = useRef(null)

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
        setMessageArray(() => {
            return conversation.map((message) => {
                return {...message, isOpened: false}
            })
        })
        scrollToDown()
    }, [])

    const [nowMessage, setNowMessage] = useState('')
    const sendNewMessage = () => {
        if (!nowMessage.toString().trim().length > 0) {
            return
        }

        setMessageArray(() => {
            return messageArray.concat([
                {
                    id: randomId().toString().split('-')[1],
                    sender: credentials._id,
                    message: nowMessage,
                    type: 'text',
                    time: new Date().toLocaleTimeString(),
                    requestingForApproval: false,
                    approvedState: null,
                },
            ])
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
            (error) => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                        setMessageArray(() => {
                            return messageArray.concat([
                                {
                                    id: randomId().toString().split('-')[1],
                                    sender: credentials._id,
                                    message: {
                                        file: fileName,
                                        url: url,
                                    },
                                    type: 'file',
                                    time: new Date().toLocaleTimeString(),
                                    requestingForApproval: false,
                                    approvedState: null,
                                },
                            ])
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

    const deleteMessage = (id) => {
        setMessageArray(() => {
            return messageArray.filter((message) => message.id !== id)
        })
    }

    const deleteFileMessage = (id, filename) => {
        const storageRef = getStorage(firebaseApp)
        const fileRef = ref(storageRef, `files/${filename}`)

        deleteObject(fileRef).then(() => {
            deleteMessage(id)
        })
    }

    const approveMessage = (id) => {
        setMessageArray(() => {
            return messageArray.map((message) => {
                if (message.id === id && message.requestingForApproval) {
                    return {...message, approvedState: true}
                } else {
                    return message
                }
            })
        })
    }

    const disapproveMessage = (id) => {
        setMessageArray(() => {
            return messageArray.map((message) => {
                if (message.id === id && message.requestingForApproval) {
                    return {...message, approvedState: false}
                } else {
                    return message
                }
            })
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

    const editMessageHandler = (id) => {
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
                                <LoadingAnimation/>
                            </>
                        )}
                        {approvalState === 'approved' && (
                            <>
                                Topic Approved &nbsp;&nbsp;
                                <OkAnimation/>
                            </>
                        )}
                        {approvalState === 'rejected' && (
                            <>
                                Topic Rejected &nbsp;&nbsp;
                                <NotOkAnimation/>
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
                startAdornment={<AttachmentsIcon/>}
                endAdornment={<SendIcon/>}
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
