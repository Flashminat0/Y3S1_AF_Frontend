import React from 'react';
import ModalWrapper from "../../layouts/modal-layout/ModalWrapper";
import SearchBar from "../../searchbar/SearchBar";
import PanelMemberModalList from "../../boxes/lists/panels/admin/PanelMemberModalList";

const AllocatePanelModal = ({openModal, setOpenModal, modalTitle, children}) => {
    return (
        <ModalWrapper openModal={openModal} setOpenModal={setOpenModal} modalTitle={'Allocate Panel'}>
            <SearchBar placeholder={"Panel Search"}/>
            {children}
        </ModalWrapper>
    );
};

export default AllocatePanelModal;