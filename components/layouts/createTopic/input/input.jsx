import React, {useState} from 'react'
import {TextField, Chip, Autocomplete} from '@mui/material'
const input = ({setTopicArray}) => {
    const [value, setValues] = useState([])

    return (
        <div>
            <div>
                <Autocomplete
                    multiple
                    id="tags-filled"
                    options={[]}
                    freeSolo
                    renderTags={(value = ([] = String), getTagProps) =>
                        value.map((option = String, index = String) => (
                            <Chip
                                variant="outlined"
                                label={option}
                                {...getTagProps({index})}
                                onChange={setTopicArray(value)}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="filled"
                            label="Insert"
                            placeholder="Insert your tags here"
                        />
                    )}
                />
            </div>
        </div>
    )
}

export default input
