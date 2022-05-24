import React, {useEffect, useRef, useState} from 'react'
import {Input} from "@mui/material";
import SenderBubble from "./SenderBubble";
import ReceivedBubble from "./RecivedBubble";

const BasicConversationWindow = ({receiver}) => {
    const myRef = useRef(null)

    const [userProfile, setUserProfile] = useState(receiver)


    useEffect(() => {
        myRef.current.scrollIntoView({ block: 'end',  behavior: 'smooth' })
    }, []);

    return (
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-full w-full">
            <div className="flex-none sm:items-center justify-between py-1 border-b-2 border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            {userProfile}
                        </h2>
                    </div>
                    <div className=" mt-4 flex md:mt-0 md:ml-4 ">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="flex-1 flex flex-col space-y-4 p-3 overflow-y-auto"
            >
                <ReceivedBubble/>
                <ReceivedBubble/>
                <ReceivedBubble/>
                <SenderBubble/>
                <SenderBubble/>
                <ReceivedBubble/>
                <SenderBubble/>
                <SenderBubble/>

                <div ref={myRef}></div>
            </div>
            <Input className="flex-none w-full p-3 m-3 lg:m-0" placeholder="Type a message..."/>
        </div>
    )
}

export default BasicConversationWindow
