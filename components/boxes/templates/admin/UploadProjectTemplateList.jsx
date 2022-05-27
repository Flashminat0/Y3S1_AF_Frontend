import React, {useState} from 'react';
import StudentModalButtonWrapper from "../../../layouts/student/StudentModalButtonWrapper";

const templateFileStaticList = [
    {
        id: 1,
        fileName: 'nut',
        fileSize: '31KB',
        updatedAt: '2022-03-31',
        fileType: 'pdf',
    },
    {
        id: 2,
        fileName: 'nzmDR',
        fileSize: '377KB',
        updatedAt: '2022-04-01',
        fileType: 'xls',
    },
    {
        id: 3,
        fileName: 'rise',
        fileSize: '720KB',
        updatedAt: '2022-04-01',
        fileType: 'txt',
    },
    {
        id: 4,
        fileName: 'cruel',
        fileSize: '995KB',
        updatedAt: '2022-04-02',
        fileType: 'pptx',
    },
    {
        id: 5,
        fileName: 'punish',
        fileSize: '966KB',
        updatedAt: '2022-04-10',
        fileType: 'pdf',
    },
    {
        id: 6,
        fileName: 'choice',
        fileSize: '441KB',
        updatedAt: '2022-04-17',
        fileType: 'pdf',
    },
    {
        id: 7,
        fileName: 'oil',
        fileSize: '49KB',
        updatedAt: '2022-04-21',
        fileType: 'pdf',
    },
    {
        id: 8,
        fileName: 'once',
        fileSize: '383KB',
        updatedAt: '2022-05-01',
        fileType: 'doc',
    },
    {
        id: 9,
        fileName: 'pattern',
        fileSize: '120MB',
        updatedAt: '2022-05-13',
        fileType: 'mp4',
    },
    {
        id: 10,
        fileName: 'flame',
        fileSize: '927KB',
        updatedAt: '2022-05-01',
        fileType: 'xlsx',
    },
    {
        id: 11,
        fileName: 'afraid',
        fileSize: '363KB',
        updatedAt: '2022-06-15',
        fileType: 'docx',
    },
]

const UploadProjectTemplateList = () => {
    const [templateFileList, setTemplateFileList] = useState(templateFileStaticList);

    return (
        <div>
            <StudentModalButtonWrapper btnName={""} btnFunction={}>

            </StudentModalButtonWrapper>
        </div>
    );
};

export default UploadProjectTemplateList;