import React from 'react'
import BlueShortButton from '../../buttons/short-button/BlueShortButton'

const AdminModalButtonWrapper = ({children, btnName, btnFunction}) => {
    return (
        <div className={'px-2 lg:px-5 py-6'}>
            <div className={'flex justify-end mr-2 lg:mr-6'}>
                <BlueShortButton btnName={btnName} btnFunction={btnFunction} />
            </div>
            {children}
        </div>
    )
}

export default AdminModalButtonWrapper
