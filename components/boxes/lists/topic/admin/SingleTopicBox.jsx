import React from 'react'
import {CgTemplate} from "react-icons/cg";
import {BsTagsFill} from 'react-icons/bs';
import {Popover} from "@headlessui/react";
import {FiChevronDown} from "react-icons/fi";
import {AnimatePresence, motion} from "framer-motion";
import {useRouter} from "next/router";

const abilities = [
    {id: 1, name: 'Upload Project Template', icon: CgTemplate},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SingleTopicBox = ({tagsArray , pageId}) => {
    const router = useRouter()

    return (
        <div
            className={
                'mx-0 lg:mx-10 my-4 px-2 lg:px-4 py-1.5 rounded-lg shadow-md bg-gray-50'
            }
        >
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-row gap-3 items-center'}>
                    <div className={'text-lg font-semibold uppercase'}>
                        Tag List
                    </div>
                    <BsTagsFill className={'w-5 h-5'}/>
                </div>
                <div>
                    <Popover className="relative">
                        {({open}) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open
                                            ? 'outline-none border-none bg-transparent'
                                            : 'outline-none border-none bg-transparent'
                                    )}
                                >
                                    <FiChevronDown
                                        className={
                                            'w-12 h-12 hover:text-gray-500'
                                        }
                                    />
                                </Popover.Button>
                                <AnimatePresence>
                                    <Popover.Panel
                                        className="absolute z-10 -right-[5rem] transform -translate-x-1/2 mt-1 px-2 w-screen max-w-max sm:px-0">
                                        <motion.div
                                            initial={{opacity: 0, scale: 0.7}}
                                            animate={{opacity: 1, scale: 1}}
                                        >
                                            <div className="rounded-lg shadow-lg ring-1 ring-opacity-5 overflow-hidden">
                                                <div className="relative bg-gray-200 py-3 sm:gap-8 sm:p-4">
                                                    {abilities.map(
                                                        (ability, index) => (
                                                            <div
                                                                onClick={async ()=>{
                                                                    await router.push(`/admin/upload-templates/${pageId}`)
                                                                }}
                                                                key={index}
                                                                className="flex flex-row gap-5 justify-between gap-2 items-center w-full px-2 py-2 text-base hover:font-medium text-gray-900 bg-white hover:bg-green-100"
                                                            >
                                                                <div>
                                                                    {
                                                                        ability.name
                                                                    }
                                                                </div>
                                                                <ability.icon
                                                                    className={
                                                                        'w-5 h-5'
                                                                    }
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Popover.Panel>
                                </AnimatePresence>
                            </>
                        )}
                    </Popover>
                </div>
            </div>
            <div className={"flex flex-row gap-2"}>
                {tagsArray.map((tag)=>(
                    <div className={"px-3 py-1.5 bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-md"}>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleTopicBox
