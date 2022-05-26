import React from 'react'

const GroupListWrapper = ({children}) => {
    return (
        <div className={'px-2 lg:px-6 py-6 grid grid-cols-1 gap-3'}>
            {children}
        </div>
    )
}

export default GroupListWrapper
