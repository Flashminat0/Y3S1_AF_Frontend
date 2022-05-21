import React from 'react'

const MemberReject = ({onClick , Name}) => {
  return (
    <>
    <button type='button' onClick={onClick} className='bg-red-300 border-0 rounded-3xl hover:bg-red-400 cursor-pointer text-lg font-medium h-10 w-full'>{Name}</button>
    </>
  )
}

export default MemberReject