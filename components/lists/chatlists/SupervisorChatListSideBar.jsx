import React, {useState} from 'react';
import {useRouter} from "next/router";

const supervisorsStaticData = [
    {
        id: "961d8c06-79c2-46f0-93cd-605bd6cd2dd6",
        name: 'slide first',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "67036931-7843-424f-b039-4e0cc80fb788",
        name: 'look deepen',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "6745fc53-efaf-4f53-8ec5-1dcffd59780e",
        name: 'rock ear',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "97ebb35a-1ea3-408b-8787-9b0772030700",
        name: 'dinner shorten',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: "7c3e7161-4e86-435e-b223-a9670e01b931",
        name: 'body scent',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
]

const SupervisorChatListSideBar = () => {
    const [supervisors, setSupervisors] = useState(supervisorsStaticData);

    const router = useRouter();

    return (
        <div className={`absolute`}>
            <div className="pt-5 h-[90vh] grid place-items-center ">
                <div className="flex flex-col w-20 rounded-3xl shadow-lg">
                    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-gray-300 rounded-3xl">
                        <div className="flex-1">
                            <nav aria-label="Sidebar" className="py-6 flex flex-col items-center space-y-3 h-max ">
                                {supervisors.map((singleSupervisor, index) => (
                                    <span
                                        key={index}
                                        onClick={async () => {
                                            await router.push(`/chat/supervisors/${singleSupervisor.id}`)
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
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupervisorChatListSideBar;



