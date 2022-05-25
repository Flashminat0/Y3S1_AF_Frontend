import React from 'react'
import {Button} from '@mui/material'
import {useRouter} from 'next/router'

const SubmitTopicWrapper = () => {
    const router = useRouter()
    return (
        <div>
            <div className="flex items-center justify-center mt-5 ">
                <Button
                    className="hover:bg-indigo-600 text-center text-xl text-black font-semibold h-10  bg-indigo-500 rounded-lg w-3/5  "
                    onClick={() => {
                        router.push('/topic/topic')
                    }}
                >
                    Submit a Topic
                </Button>
            </div>

            <div className="flex items-center justify-center mt-5 ">
                <Button className="hover:bg-indigo-600 text-center text-xl text-black font-semibold h-10  bg-indigo-500 rounded-lg w-3/5 ">
                    Download Marking Scheam
                </Button>
            </div>
        </div>
    )
}

export default SubmitTopicWrapper
