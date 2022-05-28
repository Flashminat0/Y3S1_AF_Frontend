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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function generateStylesOnReceiver(approvedState, requestingForApproval) {
    let baseStyles =
        ' flex w-full justify-between rounded-lg rounded-bl-none text-gray-600 px-4 py-2 text-left text-sm font-medium text-white border-none focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'

    if (approvedState === null) {
        if (requestingForApproval === true) {
            baseStyles =
                baseStyles +
                ' bg-blue-200 hover:bg-blue-300 focus-visible:ring-blue-200'
        } else if (requestingForApproval === false) {
            baseStyles =
                baseStyles +
                ' bg-gray-300 hover:bg-gray-400 focus-visible:ring-gray-300'
        }
    } else if (approvedState === true) {
        baseStyles =
            baseStyles +
            ' bg-green-200 hover:bg-green-300 focus-visible:ring-green-200'
    } else if (approvedState === false) {
        baseStyles =
            baseStyles +
            ' bg-red-200 hover:bg-red-300 focus-visible:ring-red-200'
    }

    return baseStyles
}

const ReceivedFileBubble = ({
    id,
    file,
    approvedState,
    approveMessageHandler,
    disapproveMessageHandler,
    requestingForApproval,
}) => {
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
        <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className={generateStylesOnReceiver(
                                        approvedState,
                                        requestingForApproval
                                    )}
                                >
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
                                                                '.xlsx',
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
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 grid gap-2 grid-cols-2 bg-gray-100 rounded-b-md">
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
                                    {requestingForApproval && (
                                        <>
                                            {approvedState === null ? (
                                                <>
                                                    <Button
                                                        className={`col-span-1`}
                                                        fullWidth={true}
                                                        color={'success'}
                                                        variant={'outlined'}
                                                        onClick={() =>
                                                            approveMessageHandler(
                                                                id
                                                            )
                                                        }
                                                    >
                                                        Approve
                                                    </Button>
                                                    <Button
                                                        className={`col-span-1`}
                                                        fullWidth={true}
                                                        color={'error'}
                                                        variant={'outlined'}
                                                        onClick={() =>
                                                            disapproveMessageHandler(
                                                                id
                                                            )
                                                        }
                                                    >
                                                        Reject
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button
                                                        className={`col-span-2`}
                                                        fullWidth={true}
                                                        color={
                                                            approvedState
                                                                ? 'success'
                                                                : 'error'
                                                        }
                                                        variant={'contained'}
                                                    >
                                                        {approvedState
                                                            ? 'Approved'
                                                            : 'Rejected'}
                                                    </Button>
                                                </>
                                            )}
                                        </>
                                    )}
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
