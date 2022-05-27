import React, {useState} from 'react'
import ModalWrapper from '../../layouts/modal-layout/ModalWrapper'
import YellowFullButton from '../../buttons/full-button/YellowFullButton'

const CreateGroupModal = ({openModal, setOpenModal}) => {
    const [groupName, setGroupName] = useState('')

    return (
        <ModalWrapper
            openModal={openModal}
            setOpenModal={setOpenModal}
            modalTitle={'Create Group'}
        >
            <div className={'flex flex-col gap-3'}>
                <label htmlFor="group-name" className={'font-medium text-sm'}>
                    Group Name
                </label>
                <input
                    type="text"
                    onChange={(e) => {
                        setGroupName(e.target.value)
                    }}
                    value={groupName}
                    className={
                        'px-2 py-2.5 max-w-[44rem] bg-white border border-gray-300 ring-0 ring-offset-0 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-indigo-600 focus:border-indigo-600 shadow-sm rounded-md'
                    }
                />
                <YellowFullButton btnName={'Submit'} />
            </div>
        </ModalWrapper>
    )
}

export default CreateGroupModal
