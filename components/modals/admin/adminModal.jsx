import React, {useEffect, useState} from 'react'
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'
import {AiOutlineClose} from 'react-icons/ai'
import Button from '@mui/material/Button'
const adminModal = ({view, id, setOpen, deleteUser}) => {
    const [openModal, setOpenModal] = useState(view)

    useEffect(() => {
        setOpenModal(view)
    }, [view])

    return (
        <div className={`font-sans`}>
            <AnimatePresence>
                {openModal && (
                    <Dialog
                        static
                        as={motion.div}
                        open={openModal}
                        className="relative z-10"
                        onClose={() => setOpenModal(false)}
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
                                'fixed inset-0 overflow-y-auto font-susty'
                            }
                        >
                            <div className="flex min-h-full items-center justify-center p-4 text-center bg-black bg-opacity-80">
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
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all bg-red-100"
                                >
                                    <Dialog.Title as="h3" className={`mb-2`}>
                                        <span
                                            className="flex justify-end"
                                            onClick={() => {
                                                setOpenModal(false)
                                                setOpen(false)
                                            }}
                                        >
                                            <Button
                                                color={'warning'}
                                                onClick={() => {
                                                    setOpenModal(false)
                                                    setOpen(false)
                                                }}
                                                variant="contained"
                                            >
                                                Close
                                            </Button>
                                        </span>

                                        <p
                                            className={
                                                'flex justify-center items-center h-full text-xl'
                                            }
                                        >
                                            Are you sure want to delete this
                                            user?
                                        </p>
                                    </Dialog.Title>
                                    <div>
                                        <div className="mb-4">
                                            <Button
                                                color={'error'}
                                                onClick={() => {
                                                    setOpenModal(false)
                                                    setOpen(false)
                                                    deleteUser(id)
                                                }}
                                                variant="contained"
                                            >
                                                Delete Anyway
                                            </Button>
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

export default adminModal
