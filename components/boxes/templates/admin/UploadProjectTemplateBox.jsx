import React from 'react'
import {DOCXIcon, PDFIcon, PPTXIcon, TXTIcon, VideoIcon, XLSXIcon,} from '../../../assets/fileicons'
import {MdDownload} from 'react-icons/md'
import RedShortButton from '../../../buttons/short-button/RedShortButton'
import {Button} from "@mui/material";

const UploadProjectTemplateBox = ({
                                      id,
                                      fileName,
                                      fileSize,
                                      updatedAt,
                                      fileType,
                                      deleteFile
                                  }) => {
    return (
        <div className={'grid grid-cols-10 lg:grid-cols-7 gap-2 lg:gap-5'}>
            <div
                className={
                    'col-span-8 lg:col-span-6 grid grid-cols-7 lg:grid-cols-10 items-center pl-3 gap-4 bg-gray-300 shadow rounded-lg'
                }
            >
                {fileType === 'pdf' && (
                    <>
                        <PDFIcon/>
                    </>
                )}
                {(fileType === 'docx' || fileType === 'doc') && (
                    <>
                        <DOCXIcon/>
                    </>
                )}
                {fileType === 'mp4' && (
                    <>
                        <VideoIcon/>
                    </>
                )}
                {fileType === 'txt' && (
                    <>
                        <TXTIcon/>
                    </>
                )}
                {(fileType === 'pptx' || fileType === 'ppt') && (
                    <>
                        <PPTXIcon/>
                    </>
                )}
                {(fileType === 'xlsx' || fileType === 'xls') && (
                    <>
                        <XLSXIcon/>
                    </>
                )}
                <div
                    className={
                        'col-span-2 col-span-6 lg:col-span-9 px-2 py-2.5 flex flex-col gap-3 bg-gray-100'
                    }
                >
                    <div className={'grid grid-cols-8 items-center'}>
                        <div
                            className={
                                'col-start-1 col-end-8 text-lg font-semibold'
                            }
                        >
                            {fileName}
                        </div>
                        <MdDownload
                            className={'col-start-8 col-end-9 w-5 h-5'}
                        />
                    </div>
                    <div className={'grid grid-cols-8 items-center'}>
                        <div
                            className={
                                'col-start-1 col-end-8 text-sm text-gray-500'
                            }
                        >
                            {Date(updatedAt)
                                .toString()
                                .substring(
                                    0,
                                    Date(updatedAt).toString().indexOf('2022')
                                )}
                        </div>
                        <div
                            className={
                                'col-start-8 col-end-9 justify-start text-xs text-gray-500'
                            }
                        >
                            {Math.floor(parseInt(fileSize) / 1024)} kb
                        </div>
                    </div>
                </div>
            </div>
            <Button
                onClick={(x) => {
                    deleteFile(id)
                }}
                className={'h-8 text-sm lg:text-base'}
                color={'error'}
                variant="outlined"
            >
                Remove
            </Button>

        </div>
    )
}

export default UploadProjectTemplateBox
