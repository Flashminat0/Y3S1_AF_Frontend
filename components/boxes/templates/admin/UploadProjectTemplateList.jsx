import React, {useEffect, useState} from 'react'
import AdminModalButtonWrapper from '../../../layouts/admin/AdminModalButtonWrapper'
import UploadTemplatesWrapper from '../../../layouts/upload-template/UploadTemplatesWrapper'
import UploadProjectTemplateBox from './UploadProjectTemplateBox'
import {firebaseApp} from '../../../../firebase/base'
import {getDownloadURL, getStorage, ref, uploadBytes,} from 'firebase/storage'
import axios from 'axios'

const UploadProjectTemplateList = ({navigateFunc, id}) => {
    const [templateFileList, setTemplateFileList] = useState([])

    const [topicTags, setTopicTags] = useState([])

    const [topicData, setTopicData] = useState(null)

    const [refreshTrigger, setRefreshTrigger] = useState(1)

    useEffect(() => {
        const fetchTopicDetails = async () => {
            await axios
                .get('/api/topic/get-topic-data', {
                    params: {
                        topicTag: id,
                    },
                })
                .then((res) => {
                    setTopicData(res.data.topic)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        fetchTopicDetails()
    }, [refreshTrigger])

    useEffect(() => {
        if (topicData === null) {
            return
        }
        setTopicTags(topicData.tags)
        setTemplateFileList(topicData.projectTemplates)
    }, [topicData])

    const uploadFile = (e) => {
        const file = e.target.files[0]
        const storageRef = getStorage(firebaseApp)

        const fileName = `${Date.now()}-${file.name}`

        const fileRef = ref(storageRef, `projectTemplates/${fileName}`)

        uploadBytes(fileRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                const fileList = [
                    ...topicData.projectTemplates,
                    {
                        id: `${fileName}`,
                        fileName: file.name,
                        fileType: file.name.substring(
                            file.name.lastIndexOf('.') + 1,
                            file.name.length
                        ),
                        fileSize: file.size,
                        updatedAt: Date.now(),
                        url: url,
                    },
                ]

                await axios
                    .post('/api/topic/update-project-templates', {
                        id: id,
                        projectTemplates: fileList,
                    })
                    .then((res) => {
                        setRefreshTrigger(refreshTrigger + 1)
                    })
            })
        })
    }

    const deleteFile = (fileName) => {
        const fileList = topicData.projectTemplates.filter(
            (file) => file.id !== fileName
        )
        axios
            .post('/api/topic/update-project-templates', {
                id: id,
                projectTemplates: fileList,
            })
            .then((res) => {
                setRefreshTrigger(refreshTrigger + 1)
            })

    }

    return (
        <>
            {topicData && (
                <>
                    <AdminModalButtonWrapper
                        btnName={'Check Topic List'}
                        btnFunction={navigateFunc}
                    >
                        <UploadTemplatesWrapper
                            uploadHandler={uploadFile}
                            topicTags={topicTags}
                        >
                            <div className={'flex flex-col gap-3'}>
                                {templateFileList.map((file) => (
                                    <UploadProjectTemplateBox
                                        id={file.id}
                                        fileName={file.fileName}
                                        fileSize={file.fileSize}
                                        updatedAt={file.updatedAt}
                                        fileType={file.fileType}
                                        deleteFile={deleteFile}
                                    />
                                ))}
                            </div>
                        </UploadTemplatesWrapper>
                    </AdminModalButtonWrapper>
                </>
            )}
        </>
    )
}

export default UploadProjectTemplateList
