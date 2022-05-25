import { Button } from '@mui/material';
import React from 'react';

const AddedTopicBox = ({ TopicName, GrpID }) => {
    return (
        //outer box
        <div className={'mx-10 my-10 rounded-lg bg-gray-50 py-10 shadow-md'}>
            {/* inner part */}
            <div className="grid grid-cols-2">
                <div className={'ml-5 flex flex-col'}>
                    <div>{TopicName}</div>
                    <div>Group ID: {GrpID}</div>
                </div>

                <div className="ml-auto mr-4">
                    <Button className="h-10 rounded-lg bg-red-500 text-center text-xl  font-semibold text-black">
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddedTopicBox;
