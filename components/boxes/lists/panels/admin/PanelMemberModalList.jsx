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

const PanelMemberModalList = ({panelMembers}) => {
    const [panelMemberList, setPanelMemberList] = useState(
        panelMemberStaticData
    )

    const regnumber = (name) => {
        const arr = name.split('')
        const revarr = arr.reverse()
        const it = revarr.splice(0, 10)
        const reg = it.reverse()
        const RegNum = reg.join('')
        return RegNum
    }
    const name = (name) => {
        const arr = name.split('')
        const revarr = arr.reverse()
        const fname = revarr.splice(11)
        const getname = fname.reverse()
        const stringName = getname.join('')
        return stringName
    }

    return (
        <div>
            {panelMembers &&
                panelMembers.result.map((panelMember) => (
                    <div key={panelMember._id}>
                        <SinglePanelMemberModalBox
                            panelMemberName={name(panelMember.name)}
                            panelMemberRegNo={regnumber(panelMember.name)}
                        />
                    </div>
                ))}
        </div>
    )
}

export default PanelMemberModalList
