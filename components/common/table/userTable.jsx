import {setRequestMeta} from 'next/dist/server/request-meta'
import React, {useState} from 'react'
import DropDown from '../../common/table/dropdown'
import ModalDelete from '../../modals/admin/adminModal'
import DeleteOpen from '../../modals/admin/userdeleted'

const userTable = ({users, sucessDelete, setSuccess, deleteUser}) => {
    const [userRole, setRole] = useState('')
    const [open, setOpen] = useState(false)
    const [id, setId] = useState()
    const [userlist, setUsrtList] = useState('')
    const [openDelete, setOpenDelete] = useState(false)
    setTimeout(() => {
        setUsrtList(users)
    }, 1000)

    return (
        <div>
            <DeleteOpen view={sucessDelete} setSuccess={setSuccess} />
            <ModalDelete
                view={open}
                setOpen={setOpen}
                id={id}
                deleteUser={deleteUser}
            />
            <div>
                {userlist ? (
                    <div className="container mx-auto px-4 sm:px-8 max-w-3xl bg-slate-200 shadow-2xl">
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
                                            {users &&
                                                users.map((user, index) => (
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
                                                                        {
                                                                            user.name
                                                                        }
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
                                                                        setRole={
                                                                            setRole
                                                                        }
                                                                    />
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="absolute inset-0 bg-white opacity-50"
                                                                ></span>
                                                                <span className="relative space-y-1">
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 rounded-md border-none bg-blue-400 hover:bg-blue-600 w-full"
                                                                    >
                                                                        Change
                                                                        Role
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="p-2 rounded-md border-none bg-red-300 hover:bg-red-600 w-full"
                                                                        onClick={() => {
                                                                            setOpen(
                                                                                true
                                                                            )
                                                                            setId(
                                                                                user._id
                                                                            )
                                                                        }}
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-screen">
                        {' '}
                        <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />{' '}
                    </div>
                )}
            </div>
        </div>
    )
}

export default userTable
