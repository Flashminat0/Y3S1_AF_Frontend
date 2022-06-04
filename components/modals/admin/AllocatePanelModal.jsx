import React from 'react'
import ModalWrapper from '../../layouts/modal-layout/ModalWrapper'
import SearchBar from '../../searchbar/SearchBar'
import PanelMemberModalList from '../../boxes/lists/panels/admin/PanelMemberModalList'

const AllocatePanelModal = ({openModal, setOpenModal, panelMembers}) => {
    return (
        <ModalWrapper
            openModal={openModal}
            setOpenModal={setOpenModal}
            modalTitle={'Allocate Panel'}
        >
            <SearchBar placeholder={'Panel Search'} />
            <PanelMemberModalList panelMembers={panelMembers} />
        </ModalWrapper>
    )
}

export default AllocatePanelModal
