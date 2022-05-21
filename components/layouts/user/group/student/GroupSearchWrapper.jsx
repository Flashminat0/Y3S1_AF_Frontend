import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {OutlinedInput} from "@mui/material";

const GroupSearchWrapper = ({children}) => {
    return (
        <div className={"px-6 py-6"}>
            <OutlinedInput fullWidth={true} className={"h-10 mb-2"} endAdornment={<FiSearch className={"w-6 h-6"}/>}/>
            <hr/>
            {children}
        </div>
    );
};

export default GroupSearchWrapper;
