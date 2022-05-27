import React from 'react'
import {Button} from '@mui/material'

const GreenFullButton = ({btnName, btnFunction}) => {
    return (
        <div>
            <Button
                className={'mb-2 text-lg'}
                fullWidth={true}
                color={'success'}
                variant="outlined"
                onClick={() => {
                    btnFunction()
                }}
            >
                {btnName}
            </Button>
            <hr/>
        </div>
    )
}

export default GreenFullButton
