import React, {useState} from 'react';
import AllocatePanelWrapper from "../../../../layouts/allocate-panel/admin/AllocatePanelWrapper";
import SinglePanelBox from "./SinglePanelBox";

const panelMemberStaticData = [{
    panelMemberName: "Niyon Cooper",
    panelMemberRegNo: "PM20804567"
}, {
    panelMemberName: "Jalitha Dewapura",
    panelMemberRegNo: "PM22504563"},
    {
    panelMemberName: "Milena Same",
    panelMemberRegNo: "PM12434561"
}, {
    panelMemberName: "Alex Korzhikov",
        panelMemberRegNo: "PM10504530"}];

const PanelList = () => {
    const [panelList, setPanelList] = useState(panelMemberStaticData);

    return (
        <div>
            <AllocatePanelWrapper>
                {panelList.map((panel) => (
                    <SinglePanelBox panelMemberName={panel.panelMemberName} panelMemberRegNo={panel.panelMemberRegNo}/>
                ))}
            </AllocatePanelWrapper>
        </div>
    );
};

export default PanelList;