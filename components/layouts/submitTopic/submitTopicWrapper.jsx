import React from 'react'
import {Button} from '@mui/material'
import {useRouter} from 'next/router'

const SubmitTopicWrapper = () => {
    const router = useRouter()
    return (
        <div>
            <div className="mt-5 flex items-center justify-center ">
                <div className="">Submit your documents to panel member</div>
                <Button
                    className="h-10 w-3/5 rounded-lg bg-indigo-500 text-center text-xl  font-semibold text-black hover:bg-indigo-600  "
                    onClick={() => {
                        router.push('/topic/topiclist')
                    }}
                >
                    Submit a Topic
                </Button>
            </div>

            <div className="mt-5 flex items-center justify-center ">
                <Button className="h-10 w-3/5 rounded-lg bg-indigo-500 text-center text-xl  font-semibold text-black hover:bg-indigo-600 ">
                    Download Marking Scheam
                </Button>
            </div>
        </div>
    )
}

export default SubmitTopicWrapper
