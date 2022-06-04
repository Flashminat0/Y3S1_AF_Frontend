import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Chips from '../createTopic/Chips'
import Dropdown from './dropdown'
import {Button} from '@mui/material'
import CommonModal from '../createTopic/DeleteModal'

const ViewTopicBox = () => {
    const [topics, setTopics] = useState([])
    const [type, setType] = useState()
    const [modal, setModal] = useState(false)

    useEffect(() => {
        axios.get('/api/display-topic').then((result) => {
            setTopics(result.data)
        })
    }, [])

    const submitTopicHandler = () => {
        setModal(!modal)
    }

    return (
        <div>
            {topics &&
                topics.map((topic, index) => (
                    <div key={index} className="py-3 px-3">
                        {' '}
                        <div className="flex">
                            <div
                                className={
                                    'shadow-m mx-1 my-1  w-full rounded-lg bg-gray-100 py-1'
                                }
                            >
                                <div className="grid grid-cols-2">
                                    <div
                                        className={
                                            'ml-5 flex flex-col rounded-lg p-1'
                                        }
                                    >
                                        <div className=" flex space-x-2 px-3 text-lg">
                                            <div>Topic : </div>{' '}
                                            {topic.tags.map((tags, index) => (
                                                <div key={index}>
                                                    <Chips tags={tags} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex rounded-lg px-3 text-lg">
                                            <div className="pr-1">Steps : </div>
                                            {topics.steps}
                                        </div>
                                    </div>

                                    <div className="ml-auto pr-3 pt-3">
                                        <Button
                                            color={'warning'}
                                            variant="outlined"
                                            onClick={submitTopicHandler}
                                        >
                                            Submit Topic
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                ))}
            <CommonModal view={modal} />
        </div>
    )
}

export default ViewTopicBox
