import React, {useEffect, useState} from 'react'
import {Dialog} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'
import {AiOutlineClose} from 'react-icons/ai'
import Button from '@mui/material/Button'
const CommonModal = ({view}) => {
    const [openModal, setOpenModal] = useState(view)
    const [topic, setTopic] = useState()

    const submitHndler = () => {
        console.log(topic)
    }
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
                                'font-susty fixed inset-0 overflow-y-auto'
                            }
                        >
                            <div className="flex min-h-full items-center justify-center bg-gray-700 bg-opacity-80 p-4 text-center">
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
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-red-100/80 p-6 text-left align-middle shadow-xl transition-all"
                                >
                                    <Dialog.Title as="h3" className={`mb-2`}>
                                        <span
                                            className="flex justify-end"
                                            onClick={() => {
                                                setOpenModal(false)
                                            }}
                                        >
                                            <Button
                                                color={'error'}
                                                onClick={() => {
                                                    setOpenModal(false)
                                                }}
                                                variant="text"
                                            >
                                                Close
                                            </Button>
                                        </span>
                                        <div>
                                            <label>Topic</label>
                                            <input
                                                onChange={(e) => {
                                                    setTopic(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <Button
                                                color="warning"
                                                variant="outlined"
                                                type="submit"
                                                onClick={submitHndler}
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </Dialog.Title>
                                    <div>
                                        <div className="mb-4">
                                            <div className="text-lg font-medium leading-6 text-gray-900">
                                                <Button
                                                    color={'error'}
                                                    onClick={() => {
                                                        setOpenModal(false)
                                                    }}
                                                    variant="text"
                                                >
                                                    Delete
                                                </Button>
                                            </div>
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

export default CommonModal
