import React, {useState} from 'react'
import ModalWrapper from '../../layouts/modal-layout/ModalWrapper'
import YellowFullButton from '../../buttons/full-button/YellowFullButton'
import {useLocalStorage} from '@mantine/hooks'
import axios from 'axios'
import {useRouter} from 'next/router'

const CreateGroupModal = ({openModal, setOpenModal}) => {
    const router = useRouter()

    const [groupName, setGroupName] = useState('')
    const [credentials, setCredentials] = useLocalStorage({
        key: 'y3s1-af-credentials',
        defaultValue: {},
    })

    const createGroup = async () => {
        await axios
            .post('/api/users/create-group', {
                userId: credentials._id,
                groupName: groupName,
            })
            .then(async (res) => {
                await router.push('/student/finalize-group')
            })
    }

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
                <YellowFullButton btnFn={createGroup} btnName={'Submit'} />
            </div>
        </ModalWrapper>
    )
}

export default CreateGroupModal
