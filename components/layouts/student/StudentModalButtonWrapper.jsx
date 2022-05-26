import React from 'react';
import BlueShortButton from "../../buttons/short-button/BlueShortButton";

const StudentModalButtonWrapper = ({children, btnName, btnFunction}) => {
    return (
        <div className={"px-5 py-6"}>
            <div className={"flex justify-end mr-6"}>
                <BlueShortButton btnName={btnName} btnFunction={btnFunction}/>
            </div>
            {children}
        </div>
    );
};

export default StudentModalButtonWrapper;