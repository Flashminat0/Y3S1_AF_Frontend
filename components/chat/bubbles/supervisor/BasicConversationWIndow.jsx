import React, {useEffect, useRef, useState} from 'react'
import {Input, InputAdornment, LinearProgress} from '@mui/material'
import SenderTextBubble from './text/SenderTextBubble'
import ReceivedBubble from './text/ReceivedTextBubble'
import {FiPaperclip} from 'react-icons/fi'
import {RiSendPlane2Fill} from 'react-icons/ri'
import SenderFileBubble from './file/SenderFileBubble'
import ReceivedFileBubble from './file/ReceivedFileBubble'
import {randomId} from '@mantine/hooks'
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

const BasicConversationWindow = ({receiver, status}) => {
    const myRef = useRef(null)

    const [scrollToDownTrigger, setScrollToDownTrigger] = useState(1)
    const [messageArray, setMessageArray] = useState([])
    const [approvalState, setApprovalState] = useState('pending')

    useEffect(() => {
        myRef.current.scrollIntoView({block: 'end', behavior: 'smooth'})
    }, [scrollToDownTrigger])

    const scrollToDown = () => {
        setScrollToDownTrigger(scrollToDownTrigger + 1)
    }

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
            return fakeMessages.map((message) => {
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
                    sender: 'Me',
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
                                    sender: 'Me',
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

    const requestForApproval = (id) => {
        setMessageArray(() => {
            return messageArray.map((message) => {
                if (message.id === id) {
                    return {...message, requestingForApproval: true}
                }
                return message
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
                            {singleMessage.sender === 'Me' ? (
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
                                            requestingForApproval={
                                                singleMessage.requestingForApproval
                                            }
                                            approvedState={
                                                singleMessage.approvedState
                                            }
                                            sender={singleMessage.sender}
                                        />
                                    ) : (
                                        <>
                                            <ReceivedFileBubble
                                                id={singleMessage.id}
                                                file={singleMessage.message}
                                                requestingForApproval={
                                                    singleMessage.requestingForApproval
                                                }
                                                approvedState={
                                                    singleMessage.approvedState
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

const fakeMessages = [
    {
        id: 1,
        sender: 'Me',
        message: 'praise social those trouble week fail peculiar spirit mine ',
        type: 'text',
        time: new Date(),
        requestingForApproval: true,
        approvedState: false,
    },
    {
        id: 2,
        sender: 'Me',
        message:
            'group gold mention force dozen enclose today race fat spend road',
        type: 'text',
        time: new Date(),
        requestingForApproval: false,
        approvedState: true,
    },
    {
        id: 3,
        sender: 'NotMe',
        message:
            'sympathy general night generous shilling suggest needle product unit holiday class respect',
        type: 'text',
        time: new Date(),
        requestingForApproval: true,
        approvedState: false,
    },
    {
        id: 4,
        sender: 'Me',
        message: {
            file: '1212121212-abc.pdf',
            url: 'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=2abbb496-a605-40b9-8266-4fc5b4ae1cce',
        },
        type: 'file',
        time: new Date(),
        requestingForApproval: true,
        approvedState: true,
    },
    {
        id: 5,
        sender: 'Me',
        message: 'even 9c760f50-798d-4119-9a5e-b0694af64e27 straight away',
        type: 'text',
        time: new Date(),
        requestingForApproval: false,
        approvedState: false,
    },
    {
        id: 6,
        sender: 'NotMe',
        message: 'flag 51fef481-ec39-4875-940d-b99f66ee0a08 drop cousin',
        type: 'text',
        time: new Date(),
        requestingForApproval: true,
        approvedState: true,
    },
    {
        id: 7,
        sender: 'NotMe',
        message: {
            file: '32323232-File_for_y4s11_project_4_this_is_a_test.mp3',
            url: 'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=2abbb496-a605-40b9-8266-4fc5b4ae1cce',
        },
        type: 'file',
        time: new Date(),
        requestingForApproval: true,
        approvedState: false,
    },
    {
        id: 8,
        sender: 'Me',
        message: 'Ok',
        type: 'text',
        time: new Date(),
        requestingForApproval: true,
        approvedState: true,
    },
    {
        id: 9,
        sender: 'Me',
        message: 'Approved',
        type: 'text',
        time: new Date(),
        requestingForApproval: false,
        approvedState: null,
    },
    {
        id: 10,
        sender: 'NotMe',
        message: '👍',
        type: 'text',
        time: new Date(),
        requestingForApproval: false,
        approvedState: true,
    },
]
