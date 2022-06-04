import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '@mui/material/Button';
const CommonModal = ({ view, deleteTopic, tid, setDeleteView }) => {
    const [openModal, setOpenModal] = useState(view);

    useEffect(() => {
        setOpenModal(view);
    }, [view]);

    const submitTopic = async () => {
        try {
            axios.post('/api/input-topic', {
                tags: topicArray,
            });
            setTrigger(trigger + 1);
        } catch (error) {
            console.error(error.message);
        }
    };

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
                            transition: { duration: 0.4 },
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
                                    initial={{ scale: 0.8, opacity: 0 }}
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
                                                setOpenModal(false);
                                            }}
                                        >
                                            <Button
                                                color={'error'}
                                                onClick={() => {
                                                    setOpenModal(false);
                                                    setDeleteView(false);
                                                    submitTopic();
                                                }}
                                                variant="text"
                                            >
                                                Close
                                            </Button>
                                        </span>

                                        <p
                                            className={
                                                'mt-5 flex justify-center pt-2 text-lg font-thin'
                                            }
                                        >
                                            Are you sure want to Delete this
                                            Topic?
                                        </p>
                                    </Dialog.Title>
                                    <div>
                                        <div className="mb-4">
                                            <div className="text-lg font-medium leading-6 text-gray-900">
                                                <Button
                                                    color={'error'}
                                                    onClick={() => {
                                                        setOpenModal(false);
                                                        deleteTopic(tid);
                                                        setDeleteView(false);
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
    );
};

export default CommonModal;
