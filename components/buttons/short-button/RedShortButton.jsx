import React from 'react'
import {Button} from '@mui/material'

const RedShortButton = ({id, btnName, btnFunction}) => {
    return (
        <div>
            <Button
                onClick={btnFunction}
                className={'h-8 text-sm lg:text-base'}
                color={'error'}
                variant="outlined"
            >
                {btnName}
            </Button>
        </div>
    )
}

export default RedShortButton
