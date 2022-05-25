import React from 'react'
import {Button} from '@mui/material'

const CreateTopicWrapper = ({children}) => {
    return (
        <div>
            <div className="mb-5 flex justify-center text-3xl font-semibold uppercase">
                Add Topic
            </div>
            <div className="flex w-screen justify-center">
                <form className="mb-4 w-4/5 rounded bg-white px-8 pt-6 pb-8 shadow-md">
                    <div className="flex flex-row justify-center">
                        <div className="mb-6">
                            <input
                                className="focus:shadow-outline w-4/5 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none "
                                placeholder="Add your topic here"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                className="focus:shadow-outline w-4/5 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none "
                                placeholder="Group registration number"
                            />
                        </div>
                        <div className="">
                            <Button
                                className={
                                    'h-10 rounded-lg bg-indigo-500 text-center  text-xl font-semibold'
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
