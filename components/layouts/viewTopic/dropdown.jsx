import React from 'react'

const Dropdown = ({setType}) => {
    const type = ['PDF', 'Docx', 'pptx']
    return (
        <div>
            <select
                className="border-0 bg-green-100"
                name="type"
                id="type"
                onChange={(e) => {
                    setType(e.target.value)
                }}
            >
                {type.map((values, index) => (
                    <option key={index} value={values} selected={type}>
                        {values}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown
