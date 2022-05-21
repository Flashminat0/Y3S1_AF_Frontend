import React from 'react';

const CoSupervisorChatListSideBar = () => {
    return (
        <div>
            <div className="pt-5 h-[90vh] grid place-items-center ">
                <div className="flex flex-col w-20 rounded-3xl shadow-lg">
                    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-gray-300 rounded-3xl">
                        <div className="flex-1">
                            <nav aria-label="Sidebar" className="py-6 flex flex-col items-center space-y-3 h-max ">
                                {co_supervisors.map((SingleCoSupervisor, index) => (
                                    <span
                                        key={index}
                                        // href={SingleSupervisor.href}
                                        className="flex items-center p-3 pb-1 rounded-lg text-indigo-200 hover:bg-gray-200 mx-2"
                                    >
                                    <span className="inline-block relative">
                                        <img
                                            className="h-12 w-12 rounded-md"
                                            src={SingleCoSupervisor.imageUrl}
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

export default CoSupervisorChatListSideBar;


const co_supervisors = [
    {
        name: 'slide first',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: 'look deepen',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: 'rock ear',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: 'dinner shorten',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: 'body scent',
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
]

