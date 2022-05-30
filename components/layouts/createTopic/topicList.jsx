import React from 'react'
import CreateTopicWrapper from './createTopicWrapper'
import AddedTopicBox from './addedTopicBox'
import {useState, useEffect} from 'react'
import axios from 'axios'

const TopicList = () => {
    const [trigger, setTrigger] = useState(1)
    const [topics, setTopics] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/display-topic').then((result) => {
            setTopics(result.data)
        })
    }, [trigger])

    return (
        <div>
            <CreateTopicWrapper setTrigger={setTrigger} trigger={trigger}>
                <AddedTopicBox
                    topicData={topics}
                    setTrigger={setTrigger}
                    trigger={trigger}
                />
            </CreateTopicWrapper>
        </div>
    )
}

export default TopicList
