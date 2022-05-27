import React, {useState} from 'react'
import SinglePanelMemberModalBox from './SinglePanelMemberModalBox'

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

const PanelMemberModalList = () => {
    const [panelMemberList, setPanelMemberList] = useState(
        panelMemberStaticData
    )

    return (
        <div>
            {panelMemberList.map((panelMember) => (
                <div key={panelMember.id}>
                    <SinglePanelMemberModalBox
                        panelMemberName={panelMember.panelMemberName}
                        panelMemberRegNo={panelMember.panelMemberRegNo}
                    />
                </div>
            ))}
        </div>
    )
}

export default PanelMemberModalList
