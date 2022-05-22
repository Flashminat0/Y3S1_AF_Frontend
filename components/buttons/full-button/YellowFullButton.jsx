import React from 'react'
import { Button } from '@mui/material'

const YellowFullButton = ({ btnName }) => {
    return (
        <div>
            <Button
                className={'mb-2 text-lg'}
                fullWidth={true}
                color={'warning'}
                variant="outlined"
            >
                {btnName}
            </Button>
        </div>
    )
}

export default YellowFullButton
