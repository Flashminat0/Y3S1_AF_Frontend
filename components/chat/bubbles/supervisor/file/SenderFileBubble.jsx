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

const SenderFileBubble = ({id, file, deleteFileMessage}) => {
    const fileTypes = [
        'pdf',
        'docx',
        'doc',
        'rtf',
        'odt',
        'pptx',
        'xls',
        'xls',
        'xlsx',
        'mp4',
        'mkv',
        'mov',
        'avi',
        'wmv',
        'flv',
        'm4v',
        'm4a',
        'm4b',
        'm4p',
        'm4r',
        'm4v',
        'jpg',
        'png',
        'jpg',
        'jpeg',
        'gif',
        'bmp',
        'tiff',
        'tif',
        'psd',
        'raw',
        'webp',
        'svg',
        'mp3',
        'txt',
    ]

    const clipboard = useClipboard({timeout: 800})

    return (
        <div className="flex items-end justify-end group">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg rounded-br-none bg-indigo-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-indigo-700 border-none focus:outline-none focus-visible:ring focus-visible:ring-indigo-600 focus-visible:ring-opacity-75">
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
                                                            {['pdf'].some(
                                                                (extension) =>
                                                                    file.file
                                                                        .toString()
                                                                        .includes(
                                                                            extension
                                                                        )
                                                            ) && <PDFIcon />}
                                                            {[
                                                                'docx',
                                                                'doc',
                                                                'rtf',
                                                                'odt',
                                                            ].some(
                                                                (extension) =>
                                                                    file.file
                                                                        .toString()
                                                                        .includes(
                                                                            extension
                                                                        )
                                                            ) && <DOCXIcon />}
                                                            {['pptx'].some(
                                                                (extension) =>
                                                                    file.file
                                                                        .toString()
                                                                        .includes(
                                                                            extension
                                                                        )
                                                            ) && <PPTXIcon />}
                                                            {[
                                                                'xls',
                                                                'xls',
                                                                'xlsx',
                                                            ].some(
                                                                (extension) =>
                                                                    file.file
                                                                        .toString()
                                                                        .includes(
                                                                            extension
                                                                        )
                                                            ) && <XLSXIcon />}
                                                            {[
                                                                'mp4',
                                                                'mkv',
                                                                'mov',
                                                                'avi',
                                                                'wmv',
                                                                'flv',
                                                                'm4v',
                                                                'm4a',
                                                                'm4b',
                                                                'm4p',
                                                                'm4r',
                                                                'm4v',
                                                            ].some(
                                                                (extension) =>
                                                                    file.file
                                                                        .toString()
                                                                        .includes(
                                                                            extension
                                                                        )
                                                            ) && <VideoIcon />}
                                                            {[
                                                                'jpg',
                                                                'png',
                                                                'jpg',
                                                                'jpeg',
                                                                'gif',
                                                                'bmp',
                                                                'tiff',
                                                                'tif',
                                                                'psd',
                                                                'raw',
                                                                'webp',
                                                                'svg',
                                                            ].some(
                                                                (extension) =>
                                                                    file.file
                                                                        .toString()
                                                                        .includes(
                                                                            extension
                                                                        )
                                                            ) && <ImageIcon />}
                                                            {['mp3'].some(
                                                                (extension) =>
                                                                    file.file
                                                                        .toString()
                                                                        .includes(
                                                                            extension
                                                                        )
                                                            ) && (
                                                                <AudioFileIcon />
                                                            )}
                                                            {['txt'].some(
                                                                (extension) =>
                                                                    file.file
                                                                        .toString()
                                                                        .includes(
                                                                            extension
                                                                        )
                                                            ) && <TXTIcon />}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <OtherFileIcon />
                                                        </>
                                                    )}
                                                </>
                                            </div>
                                            <div
                                                className={`col-span-7 my-auto truncate`}
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
                                            } h-7 w-7 text-white`}
                                        />
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 grid gap-2 grid-cols-2 bg-gray-100 rounded-b-md">
                                    <Button
                                        color={'primary'}
                                        variant={
                                            clipboard.copied
                                                ? 'contained'
                                                : 'outlined'
                                        }
                                        onClick={() =>
                                            clipboard.copy(`${file.url}`)
                                        }
                                    >
                                        Copy URL
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            deleteFileMessage(id, file.file)
                                        }}
                                        color={'error'}
                                        variant={'outlined'}
                                    >
                                        Delete
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
                className="w-8 h-8 rounded-full order-2"
            />
        </div>
    )
}

export default SenderFileBubble
