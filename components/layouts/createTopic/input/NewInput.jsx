import React, { useState } from 'react'

const NewInput = () => {
    const[value,setValue] = useState();
    console.log(value);
  return (
    <div>
        <input type='text' onKeyDown={(e)=>(setValue(e.target.value))}></input>
    </div>
  )
}

export default NewInput