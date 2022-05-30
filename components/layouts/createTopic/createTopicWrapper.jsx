import React, {useState} from 'react'
import {Button} from '@mui/material'
import Input from './input/input'

const CreateTopicWrapper = ({children, setTrigger, trigger}) => {
    const [tags, setTopicArray] = useState()

    const inputTopic = async () => {
        try {
            const body = {tags}
            const response = fetch('http://localhost:8000/api/input-topic', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            })
            setTrigger(trigger + 1)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="p-10">
            <div className="mb-5 flex justify-center text-3xl font-semibold uppercase">
                Add Topic
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 pl-14">
                    <Input setTopicArray={setTopicArray} />
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

            <hr />

            {children}
        </div>
    )
}
export default CreateTopicWrapper
