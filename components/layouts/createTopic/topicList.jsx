import React from 'react';
import CreateTopicWrapper from './createTopicWrapper';
import AddedTopicBox from './addedTopicBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

//topic list
const TopicList = ({ navigateFunc }) => {
    const [trigger, setTrigger] = useState(1);
    const [topics, setTopics] = useState([]);
    const router = useRouter();

    useEffect(() => {
        axios.get('/api/display-topic').then((result) => {
            setTopics(result.data);
        });
    }, [trigger]);

    return (
        <div>
            <Button
                className={'h-8 text-sm lg:text-base'}
                color={'primary'}
                variant="outlined"
                onClick={() => {
                    router.push('/topic/topic');
                }}
            >
                Submit Topic
            </Button>
            <CreateTopicWrapper setTrigger={setTrigger} trigger={trigger}>
                <AddedTopicBox
                    topicData={topics}
                    setTrigger={setTrigger}
                    trigger={trigger}
                />
            </CreateTopicWrapper>
        </div>
    );
};

export default TopicList;
