import React from 'react'
import CreateTopicWrapper from './createTopicWrapper';
import AddedTopicBox from './addedTopicBox';
import { useState } from 'react';

 //static data list
 const TopicListData = [{
  Tname :"Hotel Management System"
},
{
  Tname:"Taxi Mnagement system"
}
];

const TopicList = () => {

const [TopicName, setTopicName] = useState(TopicListData);
  return (
    <div >
        <CreateTopicWrapper>
          {TopicListData.map((topic)=>(
              <AddedTopicBox TopicName={topic.Tname} />
          ) )}
        </CreateTopicWrapper>
    </div>
  )
}

export default TopicList;