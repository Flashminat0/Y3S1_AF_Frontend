import React from 'react'
import {Button} from '@mui/material'

const BlueShortButton = ({btnName, btnFunction}) => {
    return (
        <div>
            <Button
                className={'h-8 text-sm lg:text-base'}
                color={'primary'}
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

export default BlueShortButton
