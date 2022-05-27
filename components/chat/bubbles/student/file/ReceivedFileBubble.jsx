import React from 'react'
import {Disclosure} from '@headlessui/react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {Button} from '@mui/material'
import {
    AudioFileIcon,
    DOCXIcon,
    ImageIcon,
    OtherFileIcon,
    PDFIcon,
    PPTXIcon,
    TXTIcon,
    VideoIcon,
    XLSXIcon,
} from '../../../../assets/fileicons'
import {useClipboard} from '@mantine/hooks'

const ReceivedFileBubble = ({file}) => {
    const fileTypes = [
        'docx',
        'pptx',
        'xlsx',
        'txt',
        'pdf',
        'jpg',
        'png',
        'mp4',
        'docx',
        'mov',
        'mp3',
    ]
    const clipboard = useClipboard({timeout: 800})

    return (
        <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg rounded-bl-none bg-gray-300 text-gray-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-400 border-none focus:outline-none focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-opacity-75">
                                    <span className={`text-base`}>
                                        <div
                                            className={`grid grid-cols-10 content-around`}
                                        >
                                            <div
                                                onClick={(x) => {
                                                    window.open(
                                                        file.url.toString(),
                                                        '_blank'
                                                    )
                                                }}
                                                className={`col-span-3 cursor-pointer`}
                                            >
                                                <>
                                                    {fileTypes.some(
                                                        (fileType) =>
                                                            file.file.includes(
                                                                fileType
                                                            )
                                                    ) ? (
                                                        <>
                                                            {file.file
                                                                .toString()
                                                                .includes(
                                                                    '.pdf'
                                                                ) && (
                                                                <PDFIcon/>
                                                            )}
                                                            {file.file
                                                                .toString()
                                                                .includes(
                                                                    '.docx'
                                                                ) && (
                                                                <DOCXIcon/>
                                                            )}
                                                            {file.file
                                                                .toString()
                                                                .includes(
                                                                    '.pptx'
                                                                ) && (
                                                                <PPTXIcon/>
                                                            )}
                                                            {file.file
                                                                .toString()
                                                                .includes(
                                                                    '.xlsx'
                                                                ) && (
                                                                <XLSXIcon/>
                                                            )}
                                                            {file.file
                                                                .toString()
                                                                .includes(
                                                                    '.mp4' ||
                                                                    'mkv' ||
                                                                    'mov'
                                                                ) && (
                                                                <VideoIcon/>
                                                            )}
                                                            {file.file
                                                                .toString()
                                                                .includes(
                                                                    '.png'
                                                                ) && (
                                                                <ImageIcon/>
                                                            )}
                                                            {file.file
                                                                .toString()
                                                                .includes(
                                                                    '.mp3'
                                                                ) && (
                                                                <AudioFileIcon/>
                                                            )}
                                                            {file.file
                                                                .toString()
                                                                .includes(
                                                                    '.txt'
                                                                ) && (
                                                                <TXTIcon/>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <OtherFileIcon/>
                                                        </>
                                                    )}
                                                </>
                                            </div>
                                            <div
                                                className={`col-span-7 my-auto truncate `}
                                            >
                                                {file.file
                                                    .toString()
                                                    .slice(
                                                        file.file
                                                            .toString()
                                                            .indexOf('-') + 1,
                                                        file.file.toString()
                                                            .length
                                                    )}
                                            </div>
                                        </div>
                                    </span>
                                    <div className={`relative bottom-1 left-2`}>
                                        <RiArrowDropDownLine
                                            className={`${
                                                open
                                                    ? 'rotate-180 transform'
                                                    : ''
                                            } h-7 w-7 text-gray-600`}
                                        />
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-sm text-gray-500 grid gap-2 grid-cols-2 bg-gray-100 rounded-b-md">
                                    <Button
                                        className={'col-span-2'}
                                        fullWidth={true}
                                        color={'success'}
                                        variant={
                                            clipboard.copied
                                                ? 'contained'
                                                : 'outlined'
                                        }
                                        onClick={() =>
                                            clipboard.copy(`${file.url}`)
                                        }
                                    >
                                        {clipboard.copied
                                            ? 'Copied !'
                                            : 'Copy URL'}
                                    </Button>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-8 h-8 rounded-full order-1"
            />
        </div>
    )
}

export default ReceivedFileBubble
