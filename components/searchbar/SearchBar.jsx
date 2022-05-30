import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {OutlinedInput} from '@mui/material'

const SearchBar = ({placeholder, changeSearchValue, value}) => {
    return (
        <div>
            <OutlinedInput
                onChange={(e) => {
                    changeSearchValue(e.target.value)
                }}
                fullWidth={true}
                placeholder={placeholder}
                className={'h-10 mb-2'}
                endAdornment={<FiSearch className={'w-6 h-6'} />}
            />
            <hr />
        </div>
    )
}

export default SearchBar
