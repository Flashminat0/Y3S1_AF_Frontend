import React, { useState } from 'react'
import DropDown from '../../common/table/dropdown'
import Modal from '../../modals/admin/adminModal'

const userTable = ({ users = [] }) => {
    const [userRole, setRole] = useState('')
    const [open, setOpen] = useState(true)

    return (
        <div>
            <Modal view={false} />
            <div>
                <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                    <div className="py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                            >
                                                User
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                            >
                                                Role
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                            >
                                                Created at
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                            >
                                                status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <a
                                                                href="#"
                                                                className="block relative"
                                                            >
                                                                {user.image && (
                                                                    <>
                                                                        <img
                                                                            alt="profil"
                                                                            src={
                                                                                user
                                                                                    .image
                                                                                    .url
                                                                            }
                                                                            className="mx-auto object-cover rounded-full h-10 w-10 "
                                                                        />
                                                                    </>
                                                                )}
                                                            </a>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {user.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                        ></span>
                                                        <span className="relative">
                                                            {user.role}
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                        ></span>
                                                        <span className="relative">
                                                            <DropDown
                                                                role={user.role}
                                                                setRole={
                                                                    setRole
                                                                }
                                                            />
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="flex px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <button
                                                        type="button"
                                                        className=""
                                                    >
                                                        Change Role
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className=""
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userTable
