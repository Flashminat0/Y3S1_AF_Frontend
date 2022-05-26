import React, {useEffect, useState} from 'react'
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'
import Button from '@mui/material/Button'
import {Input, InputAdornment} from "@mui/material";
import {RiSendPlane2Fill} from "react-icons/ri";

const EditTextMessageModal = ({view, messageId, message, editMessageModalCloseHandler}) => {

    const [editingMessage, setEditingMessage] = useState(message);

    const SendIcon = () => {
        return (<InputAdornment position={'end'}>
            <RiSendPlane2Fill
                // onClick={sendNewMessage}
                className={`${editingMessage.toString().trim().length > 0 ? 'text-indigo-500 cursor-pointer' : 'text-gray-500 '} text-xl hover:shadow-lg`}
            />
        </InputAdornment>)
    }

    return (
        <div className={`font-sans`}>
            <AnimatePresence>
                {view && (
                    <Dialog
                        static
                        as={motion.div}
                        open={view}
                        className="relative z-10"
                        onClose={() => editMessageModalCloseHandler()}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {duration: 0.4},
                        }}
                    >
                        <div
                            className={
                                'fixed inset-0 overflow-y-auto font-sans'
                            }
                        >
                            <div
                                className="flex min-h-full items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
                                <motion.div
                                    key={`modal-for-common-modals`}
                                    initial={{scale: 0.8, opacity: 0}}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        duration: 0.01,
                                    }}
                                    exit={{
                                        scale: 0,
                                        opacity: 0,
                                        duration: 0.2,
                                    }}
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all bg-white"
                                >
                                    <Dialog.Title as="h3" className={`mb-2`}>
                                        <span
                                            className="flex justify-end -mt-5"
                                            onClick={() => {
                                                editMessageModalCloseHandler()
                                            }}
                                        >
                                            <Button
                                                color={'primary'}
                                                onClick={() => {
                                                    editMessageModalCloseHandler()
                                                }}
                                                variant="text"
                                            >
                                                Close
                                            </Button>
                                        </span>
                                    </Dialog.Title>
                                    <div>
                                        <div className="mb-4">
                                            <Input
                                                value={message}
                                                endAdornment={<SendIcon/>}
                                                className="flex-none w-[95%] p-3 m-3 lg:m-0"
                                                placeholder="Type a message..."
                                                autoFocus={true}
                                                onChange={(e) => setEditingMessage(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        // sendNewMessage()
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    )
}

export default EditTextMessageModal
