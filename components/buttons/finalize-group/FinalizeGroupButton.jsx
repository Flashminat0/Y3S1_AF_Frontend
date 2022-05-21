import React from 'react'

const FinalizeGroupButton = ({onClick , Name}) => {
  return (
    <>
    <button type='button' onClick={onClick} className='bg-green-300 border-0 rounded-3xl hover:bg-green-400 cursor-pointer text-lg font-medium h-10 w-full'>{Name}</button>
    </>
  )
}

export default FinalizeGroupButton