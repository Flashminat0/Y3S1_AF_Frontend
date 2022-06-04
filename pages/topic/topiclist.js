import { useRouter } from 'next/router';
import React from 'react';
import TopicList from '../../components/layouts/createTopic/topicList';
//opic list
const topiclist = () => {
    const router = useRouter();

    return (
        <div>
            <TopicList />
        </div>
    );
};

export default topiclist;
