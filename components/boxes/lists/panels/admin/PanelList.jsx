import React, {useState} from 'react'
import AllocatePanelWrapper from '../../../../layouts/allocate-panel/AllocatePanelWrapper'
import SinglePanelBox from './SinglePanelBox'
import AdminModalButtonWrapper from "../../../../layouts/admin/AdminModalButtonWrapper";
import AllocatePanelModal from "../../../../modals/admin/AllocatePanelModal";

const panelMemberStaticData = [
    {
        id: 1,
        panelMemberName: 'Niyon Cooper',
        panelMemberRegNo: 'PM20804567',
    },
    {
        id: 2,
        panelMemberName: 'Jalitha Dewapura',
        panelMemberRegNo: 'PM22504563',
    },
    {
        id: 3,
        panelMemberName: 'Milena Same',
        panelMemberRegNo: 'PM12434561',
    },
    {
        id: 4,
        panelMemberName: 'Alex Korzhikov',
        panelMemberRegNo: 'PM10504530',
    },
]

const PanelList = ({navigateFunc}) => {
    const [panelList, setPanelList] = useState(panelMemberStaticData)
    const [openModal, setOpenModal] = useState(false)

    const openAllocatePanelModal = () => {
      setOpenModal(true)
    }

    return (
        <AdminModalButtonWrapper btnName={'Check Topic List'} btnFunction={navigateFunc}>
            <AllocatePanelModal  openModal={openModal} setOpenModal={setOpenModal}/>
            <AllocatePanelWrapper btnFunction={openAllocatePanelModal}>
                <div>
                    {panelList.map((panel) => (
                        <SinglePanelBox
                            key={panel.id}
                            panelMemberName={panel.panelMemberName}
                            panelMemberRegNo={panel.panelMemberRegNo}
                        />
                    ))}
                </div>
            </AllocatePanelWrapper>
        </AdminModalButtonWrapper>
    )
}

export default PanelList
