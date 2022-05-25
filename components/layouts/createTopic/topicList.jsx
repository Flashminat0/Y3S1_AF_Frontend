import React from 'react';
import CreateTopicWrapper from './createTopicWrapper';
import AddedTopicBox from './addedTopicBox';
import { useState } from 'react';

//static data list
const TopicListData = [
    {
        Tname: 'Hotel Management System',
        GroupID: '1',
    },
    {
        Tname: 'Taxi Mnagement system',
        GroupID: '2',
    },
];

const TopicList = () => {
    const [TopicName, setTopicName] = useState(TopicListData);
    const [GrpID, setGrpID] = useState(TopicListData);
    return (
        <div>
            <CreateTopicWrapper>
                {TopicListData.map((topic) => (
                    <AddedTopicBox
                        TopicName={topic.Tname}
                        GrpID={topic.GroupID}
                    />
                ))}
            </CreateTopicWrapper>
        </div>
    );
};

export default TopicList;
