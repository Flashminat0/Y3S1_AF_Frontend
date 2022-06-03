import React, {useEffect, useState} from 'react'
import ProjectTemplateBox from './ProjectTemplateBox'
import DownloadFileWrapper from '../../../layouts/download-files/DownloadFileWrapper'
import StudentModalButtonWrapper from '../../../layouts/student/StudentModalButtonWrapper'
import axios from "axios";

const ProjectTemplateList = ({navigateFunc, id}) => {
    const [templateFileList, setTemplateFileList] = useState(null)
    const [topicData, setTopicData] = useState(null);

    useEffect(() => {
        const fetchTopicDetails = async () => {
            await axios.get('/api/topic/get-topic-data', {
                params: {
                    topicTag: id
                }
            }).then((res) => {
                setTopicData(res.data.topic)
            }).catch((err) => {
                console.log(err);
            })
        }
        fetchTopicDetails()

    }, [])


    useEffect(() => {
        if (topicData === null) {
            return;
        }
        setTemplateFileList(topicData.projectTemplates)

    }, [topicData])

    return (
        <>
            {topicData && <>
                <StudentModalButtonWrapper
                    btnName={'Check Marking Schema'}
                    btnFunction={navigateFunc}
                >
                    <DownloadFileWrapper
                        topicName={'Project Templates'}
                        btnName={'Download Templates'}
                    >
                        <div
                            className={
                                'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5'
                            }
                        >
                            {templateFileList.map((file) => (
                                <ProjectTemplateBox
                                    key={file.id}
                                    fileName={file.fileName}
                                    fileSize={file.fileSize}
                                    updatedAt={file.updatedAt}
                                    fileType={file.fileType}
                                />
                            ))}
                        </div>
                    </DownloadFileWrapper>
                </StudentModalButtonWrapper>
            </>}
        </>
    )
}

export default ProjectTemplateList
