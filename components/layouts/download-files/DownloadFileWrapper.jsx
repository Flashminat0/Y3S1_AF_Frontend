import React from 'react'
import YellowFullButton from '../../buttons/full-button/YellowFullButton'

const DownloadFileWrapper = ({children, topicName, btnName}) => {
    return (
        <div className={'px-6 py-6'}>
            <div
                className={
                    'flex capitalize text-4xl font-semibold justify-center mb-5'
                }
            >
                {topicName}
            </div>
            <hr />
            {children}
            <YellowFullButton btnName={btnName} />
        </div>
    )
}

export default DownloadFileWrapper
