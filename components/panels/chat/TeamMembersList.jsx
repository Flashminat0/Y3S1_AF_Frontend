import React from 'react'
import {motion} from 'framer-motion'

const TeamMembersList = ({memberList}) => {
    return (
        <div className={`grid gap-3 pt-5`}>
            <div className="ml-4 -mt-2">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Team members
                </h3>
            </div>
            {memberList.map((person) => (
                <motion.div
                    whileHover={{scale: 1.05}}
                    key={person._id}
                    className="grid grid-cols-5 place-items-center bg-gray-200 rounded-2xl gap-3 mx-4 shadow-lg cursor-pointer"
                >
                    <div className={`grid place-content-center col-span-2`}>
                        {person.image ? (
                            <img
                                className="h-14 w-14 rounded-full place-content-center bg-gray-500 p-0.5"
                                src={person.image}
                                alt=""
                            />
                        ) : (
                            <div className="h-14 w-14 rounded-full bg-blue-300 grid place-items-center">
                                <span className="text-3xl font-bold text-gray-800">
                                    {person.name
                                        .charAt(0)
                                        .toString()
                                        .toUpperCase()}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="ml-3 col-span-2">
                        <p className="text-base font-medium text-gray-900 leading-none">
                            {person.name}
                        </p>
                        <p className="text-sm text-gray-500 leading-none">
                            {person.email}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default TeamMembersList
