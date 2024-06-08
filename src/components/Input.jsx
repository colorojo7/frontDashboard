import React from 'react'

const Input = ({fullName,...props}) => {
  return (
    <input 
        name={fullName}
        placeholder={fullName}
        className='block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500' 
        {...props}
    />
  )
}

export default Input