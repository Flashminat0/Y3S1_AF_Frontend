import React, {useState} from 'react'
import AllocatePanelWrapper from '../../../../layouts/allocate-panel/AllocatePanelWrapper'
import SinglePanelBox from './SinglePanelBox'

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

const PanelList = () => {
    const [panelList, setPanelList] = useState(panelMemberStaticData)

    return (
        <div>
            <AllocatePanelWrapper>
                <div>
                    {panelList.map((panel, index) => (
                        <SinglePanelBox
                            key={index}
                            panelMemberName={panel.panelMemberName}
                            panelMemberRegNo={panel.panelMemberRegNo}
                        />
                    ))}
                </div>
            </AllocatePanelWrapper>
        </div>
    )
}

export default PanelList
