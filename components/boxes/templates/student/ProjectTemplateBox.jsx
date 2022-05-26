import React from 'react'
import {MdDownload} from 'react-icons/md';
import {DOCXIcon, PDFIcon, PPTXIcon, TXTIcon, VideoIcon, XLSXIcon} from "../../../assets/fileicons";

const ProjectTemplateBox = ({fileName, fileSize, updatedAt, fileType}) => {
    return (
        <div
            className={
                'grid grid-cols-6 items-center pl-3 gap-4 bg-gray-300 shadow rounded-lg'
            }
        >
            {fileType === 'pdf' && <><PDFIcon/></>}
            {(fileType === 'docx' || fileType === 'doc') && <><DOCXIcon/></>}
            {fileType === 'mp4' && <><VideoIcon/></>}
            {fileType === 'txt' && <><TXTIcon/></>}
            {(fileType === 'pptx' || fileType === 'ppt') && <><PPTXIcon/></>}
            {(fileType === 'xlsx' || fileType === 'xls') && <><XLSXIcon/></>}
            <div
                className={
                    'col-span-5 px-2 py-2.5 flex flex-col gap-3 bg-gray-100'
                }
            >
                <div className={'grid grid-cols-8 items-center'}>
                    <div
                        className={
                            'col-start-1 col-end-8 capitalize text-lg font-semibold'
                        }
                    >
                        {fileName}
                    </div>
                    <MdDownload className={'col-start-8 col-end-9 w-5 h-5'} />
                </div>
                <div className={'grid grid-cols-8 items-center'}>
                    <div
                        className={
                            'col-start-1 col-end-8 text-sm text-gray-500'
                        }
                    >
                        {updatedAt}
                    </div>
                    <div
                        className={
                            'col-start-8 col-end-9 justify-start text-xs text-gray-500'
                        }
                    >
                        {fileSize}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplateBox
