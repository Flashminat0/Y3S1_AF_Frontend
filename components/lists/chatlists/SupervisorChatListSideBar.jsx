import React, {useState} from 'react';
import {useRouter} from "next/router";
import CommonChatListSideBarWrapper from "../../layouts/chat/CommonChatListSideBarWrapper";
import {motion} from "framer-motion";

const SupervisorChatListSideBar = ({supervisorsStaticData, onUserHover}) => {
    const [supervisors, setSupervisors] = useState(supervisorsStaticData);

    const router = useRouter();

    return (
        <CommonChatListSideBarWrapper>
            {supervisors.map((singleSupervisor, index) => (
                <motion.div
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                    <span
                        key={index}
                        onMouseEnter={() => onUserHover(singleSupervisor._id)}
                        onClick={async () => {
                            await router.push(`/chat/supervisors/${singleSupervisor._id}`)
                        }}
                        // href={SingleSupervisor.href}
                        className="flex items-center p-3 pb-1 rounded-lg text-indigo-200 hover:bg-gray-200 mx-2"
                    >
                    <span className="inline-block relative">
                        <img
                            className="h-12 w-12 rounded-md"
                            src={singleSupervisor.imageUrl}
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

export default SupervisorChatListSideBar;



