import React from 'react'
import {motion} from 'framer-motion'

const CommonChatListSideBarWrapper = ({children}) => {
    return (
        <div className={`absolute `}>
            <div className="pt-5 h-[90vh] grid place-items-center hidden sm:inline-flex">
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    animate={{scale: 1, opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    whileHover={{scale: 1.1}}
                    exit={{opacity: 0, x: -100}}
                >
                    <div className="flex flex-col w-20 rounded-3xl shadow-lg ">
                        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-gray-300 rounded-3xl overflow-x-hidden">
                            <div className="flex-1">
                                <nav
                                    aria-label="Sidebar"
                                    className="py-6 flex flex-col items-center space-y-3 h-max "
                                >
                                    {children}
                                </nav>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div
                className={`pt-5 h-[85vh] grid place-items-end inline-flex sm:hidden w-screen `}
            >
                <div className={`pr-9 w-full flex justify-center`}>
                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        animate={{scale: 1, opacity: 1, y: -40}}
                        transition={{duration: 0.5}}
                        whileHover={{scale: 1.1}}
                        exit={{opacity: 0}}
                    >
                        <div className={`relative flex justify-center `}>
                            <div className="flex flex-row  w-max rounded-3xl shadow-lg bg-gray-300 overflow-x-clip">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default CommonChatListSideBarWrapper
