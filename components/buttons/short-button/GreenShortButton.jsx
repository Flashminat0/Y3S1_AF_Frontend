import React from 'react'
import {Button} from '@mui/material'

const GreenShortButton = ({btnName, btnFunction}) => {
    return (
        <div>
            <Button
                className={'h-8 text-sm lg:text-base'}
                color={'success'}
                variant="outlined"
                onClick={() => {
                    btnFunction()
                }}
            >
                {btnName}
            </Button>
        </div>
    )
}

export default GreenShortButton
