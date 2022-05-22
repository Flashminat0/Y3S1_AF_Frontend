import React, {useState} from 'react';
import {useRouter} from "next/router";
import {motion} from "framer-motion"
import CommonChatListSideBarWrapper from "../../layouts/chat/CommonChatListSideBarWrapper";

const CoSupervisorChatListSideBar = () => {
    const [co_supervisors, setCo_supervisors] = useState(static_co_supervisors);

    const router = useRouter();
    return (
        <CommonChatListSideBarWrapper>
            {co_supervisors.map((SingleCoSupervisor, index) => (
                <motion.div
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                    <span
                        key={index}
                        onClick={async () => {
                            await router.push(`/chat/co-supervisors/${SingleCoSupervisor.id}`)
                        }}
                        // href={SingleSupervisor.href}
                        className="flex items-center p-3 pb-1 rounded-lg text-indigo-200 hover:bg-gray-200 mx-2"
                    >
                        <span className="inline-block relative">
                            <img className="h-12 w-12 rounded-md"
                                 src={SingleCoSupervisor.imageUrl}
                                 alt=""
                            />
                            <span
                                className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
                                <span className="block h-3 w-3 rounded-full bg-green-400"/>
                            </span>
                        </span>
                    </span>
                </motion.div>
            ))}
        </CommonChatListSideBarWrapper>

    );
};

export default CoSupervisorChatListSideBar;


const static_co_supervisors = [
    {
        id: "1a6b3ab9-604c-4229-adfa-8af8fbd7559e",
        name: 'slide first',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "7a80dd42-13a2-465f-a176-345bd87a91d9",
        name: 'look deepen',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "a6256bcc-72d3-40eb-ad84-852d754a3525",
        name: 'body scent',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
]

