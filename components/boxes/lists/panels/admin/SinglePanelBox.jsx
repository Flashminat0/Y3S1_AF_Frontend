import React from 'react'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import RedShortButton from '../../../../buttons/short-button/RedShortButton'

const SinglePanelBox = ({ panelMemberName, panelMemberRegNo }) => {
    return (
        <div
            className={'mx-10 my-5 px-4 py-1.5 rounded-lg shadow-md bg-gray-50'}
        >
            <div className={'flex flex-row justify-between items-center'}>
                <div className={'flex flex-col gap-2'}>
                    <div className={'flex flex-row gap-2 items-center'}>
                        <div className={'text-blue-900 uppercase'}>
                            Panel Member Info:
                        </div>
                        <BsFileEarmarkPerson
                            className={'w-5 h-5 text-blue-900'}
                        />
                    </div>
                    <div className={'flex flex-row gap-1 items-center'}>
                        <div className={'text-sm text-gray-800'}>
                            {panelMemberName}
                        </div>
                        <div className={'text-sm text-gray-500'}>
                            - {panelMemberRegNo}
                        </div>
                    </div>
                </div>
                <RedShortButton btnName={'Remove'} />
            </div>
        </div>
    )
}

export default SinglePanelBox
