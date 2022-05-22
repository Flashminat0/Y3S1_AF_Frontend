import React from 'react';
import {Button} from "@mui/material";

const GreenShortButton = ({btnName, btnFunction}) => {
    return (
        <div>
            <Button className={"h-8"} color={"success"} variant="outlined"
                    onClick={() => {
                        btnFunction();
                    }}>
                {btnName}
            </Button>
        </div>
    );
};

export default GreenShortButton;
