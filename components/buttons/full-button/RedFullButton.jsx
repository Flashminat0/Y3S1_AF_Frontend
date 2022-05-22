import React from 'react'
import { Button } from '@mui/material'

const RedFullButton = ({ btnName }) => {
    return (
        <div>
            <Button
                className={'mb-2 text-lg'}
                fullWidth={true}
                color={'error'}
                variant="outlined"
            >
                {btnName}
            </Button>
        </div>
    )
}

export default RedFullButton
