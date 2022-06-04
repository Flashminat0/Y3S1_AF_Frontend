import React from 'react';
import { Button } from '@mui/material';
import AdminModalButtonWrapper from '../../layouts/admin/AdminModalButtonWrapper';

//upload marking schema
const topicList = [
    'Hotel Managemnt System',
    'Student Management System',
    'Vehicle Rental System',
];
const UploadMarkingSchema = ({ navigateFunc }) => {
    return (
        <>
            <AdminModalButtonWrapper
                btnName={'Check Project Template List'}
                btnFunction={navigateFunc}
            >
                {topicList &&
                    topicList.map((topics, index) => (
                        <div key={index} className="py-3 px-3 ">
                            {' '}
                            <div className="flex">
                                <div
                                    className={
                                        'shadow-m mx-1 my-1 flex w-full rounded-lg bg-gray-100 py-5 pl-5'
                                    }
                                >
                                    topic : {topics}
                                    <div className="ml-auto  pr-3 pt-3">
                                        <Button
                                            variant="contained"
                                            component="label"
                                        >
                                            Upload File
                                            <input type="file" hidden />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                {/* <CommonModal view={modal} /> */}
            </AdminModalButtonWrapper>
        </>
    );
};

export default UploadMarkingSchema;
