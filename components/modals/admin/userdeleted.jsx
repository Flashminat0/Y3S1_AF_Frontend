import React, {useEffect, useState} from 'react'
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'
import {AiOutlineClose} from 'react-icons/ai'
import Button from '@mui/material/Button'
const adminModal = ({view,setSuccess}) => {
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
                            <div className="flex min-h-full items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
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
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                >
                                    <Dialog.Title as="h3" className={`mb-2`}>
                                        <span
                                            className="flex justify-end"
                                            onClick={() => {
                                                setOpenModal(false)
                                                setSuccess(false)
                                            }}
                                        >
                                            <Button
                                                color={'warning'}
                                                onClick={() => {
                                                    setOpenModal(false)
                                                    setSuccess(false)
                                                }}
                                                variant="contained"
                                            >
                                                Close
                                            </Button>
                                        </span>

                                        <p
                                            className={
                                                'flex justify-center text-3xl font-medium mt-5 pt-2'
                                            }
                                        >
                                            <img src="https://ms-researchhub.com/____impro/1/onewebmedia/payment_successful.gif?etag=W%2F%2230e24-5cfa202d%22&sourceContentType=image%2Fgif&ignoreAspectRatio&resize=235%2B200&extract=0%2B16%2B224%2B184"/>
                                        </p>
                                    </Dialog.Title>
                                    <div>
                                        <div className="mb-4">User Deleted Sucessfull!</div>
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
