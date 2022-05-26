import React from 'react'
import {Button} from '@mui/material'

const RedShortButton = ({btnName}) => {
    return (
        <div>
            <Button className={'h-8 text-sm lg:text-base'} color={'error'} variant="outlined">
                {btnName}
            </Button>
        </div>
    )
}

export default RedShortButton
