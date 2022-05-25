import React from 'react'
import {Button} from '@mui/material'

const CreateTopicWrapper = ({children}) => {
    return (
        <div>
            <div className="uppercase text-3xl font-semibold flex justify-center mb-5">
                Add Topic
            </div>
            <div className="w-screen flex justify-center">
                <form className="bg-white shadow-md rounded w-4/5 px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-row justify-center">
                        <div className="mb-6">
                            <input
                                className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                placeholder="Add your topic here"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                placeholder="Group registration number"
                            />
                        </div>
                        <div className="">
                            <Button
                                className={
                                    'text-center text-xl font-semibold h-10  bg-indigo-500 rounded-lg'
                                }
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

            <hr />
            {children}
        </div>
    )
}
export default CreateTopicWrapper
