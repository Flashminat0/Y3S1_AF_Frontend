import React from 'react';
import {FiChevronDown} from 'react-icons/fi';
import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {AiFillDelete} from "react-icons/ai";
import {BsFillEyeFill} from 'react-icons/bs';
import {MdGroup} from "react-icons/md";


const abilities = [{id: 1, name: "View Group", icon: BsFillEyeFill}, {id: 2, name: "Delete Group", icon: AiFillDelete}];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SingleGroupBox = ({groupName, groupLeader, groupLeaderRegNo, maxNo, currentNo}) => {
    return (
        <div className={"mx-10 my-5 px-4 py-1.5 rounded-lg shadow-md bg-gray-50"}>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-row gap-3 items-center"}>
                    <div className={"text-xl font-semibold uppercase"}>{groupName}</div>
                    <MdGroup className={"w-5 h-5"}/>
                </div>
                <div>
                    <Popover className="relative">
                        {({open}) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open ? 'outline-none border-none bg-transparent' : 'outline-none border-none bg-transparent',
                                    )}
                                >
                                    <FiChevronDown className={"w-12 h-12 hover:text-gray-500"}/>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel
                                        className="absolute z-10 right-1/2 transform -translate-x-1/2 mt-1 px-2 w-screen max-w-max sm:px-0">
                                        <div
                                            className="rounded-lg shadow-lg ring-1 ring-opacity-5 overflow-hidden">
                                            <div
                                                className="relative bg-gray-200 py-3 sm:gap-8 sm:p-4">
                                                {abilities.map((ability) => (
                                                    <div
                                                        className="flex flex-row gap-5 justify-between items-center w-full px-2 py-2 text-base hover:font-medium text-gray-900 bg-white hover:bg-green-100">
                                                        <div>{ability.name}</div>
                                                        <ability.icon className={"w-5 h-5"}/>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
            </div>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={"flex flex-row gap-2 items-center"}>
                    <div className={"font-medium text-blue-900"}>Group Leader:</div>
                    <div className={"text-sm text-gray-500"}>{groupLeader}</div>
                    <div className={"text-sm text-gray-500"}>({groupLeaderRegNo})</div>
                </div>
                <div className={"px-3 py-0.5 rounded-xl bg-indigo-100 hover:bg-indigo-200 font-medium"}><span
                    className={"text-gray-500"}>{currentNo}</span>/{maxNo}</div>
            </div>
        </div>
    );
};

export default SingleGroupBox;