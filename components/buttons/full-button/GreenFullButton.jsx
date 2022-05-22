import React from 'react'
import { Button } from '@mui/material'

const GreenFullButton = ({ btnName }) => {
    return (
        <div>
            <Button
                className={'mb-2 text-lg'}
                fullWidth={true}
                color={'success'}
                variant="outlined"
            >
                {btnName}
            </Button>
            <hr />
        </div>
    )
}

export default GreenFullButton
