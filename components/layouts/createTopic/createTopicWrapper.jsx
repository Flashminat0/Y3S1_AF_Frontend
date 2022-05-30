import React, {useState} from 'react'
import {Button} from '@mui/material'
import InputTags from './input/TagsInput'

const CreateTopicWrapper = ({children}) => {
    const [tags, setTags] = useState('')
    const [grpID, setGrpID] = useState('')

    const inputTopic = async () => {
        try {
            const body = {tags}
            const response = fetch('http://localhost:8000/api/input-topic', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            })
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }

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
                                value={tags}
                                onChange={(e) => setTags(["one","two"])}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                className="focus:shadow-outline w-4/5 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none "
                                placeholder="Group registration number"
                                value={grpID}
                                onChange={(e) => setGrpID(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <Button
                                className={
                                    'h-10 rounded-lg bg-indigo-500 text-center  text-xl font-semibold'
                                }
                                onClick={() => inputTopic()}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

            <hr />

            <hr/>
            {children}
        </div>
    )
}
export default CreateTopicWrapper
