import React from 'react'

const dropdown = ({setRole}) => {
    const type = [
        'admin',
        'studnet',
        'supervisor',
        'co-supervisor',
        'panel-member',
    ]
    return (
        <div>
            <select
                className="bg-green-100 border-0 text-xl w-52 h-11 rounded-xl p-2 text-center"
                name="role"
                id="role"
                onChange={(e) => {
                    setRole(e.target.value)
                }}
            >
                {type.map((values, index) => (
                    <option key={index} value={values}>
                        {values}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default dropdown
