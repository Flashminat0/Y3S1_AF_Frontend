import React from 'react'
import CreateTopicWrapper from './createTopicWrapper'
import AddedTopicBox from './addedTopicBox'
import {useState, useEffect} from 'react'
import axios from 'axios';



const TopicList = () => {
    const [topics , setTopics] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/display-topic').then((result)=>{
        setTopics(result.data)
    })
}, [topics]);
   
    return (
        <div>

             <CreateTopicWrapper>
            
                <AddedTopicBox topicData={topics}/>
               
            </CreateTopicWrapper>
        </div>
      
    )
}

export default TopicList
