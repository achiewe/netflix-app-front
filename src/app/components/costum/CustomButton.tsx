import React from 'react'

interface CustomButtonProps{
buttonName:string
}

export default function CustomButton({buttonName}:CustomButtonProps) {
  return (
    <button className='bg-[red] w-full text-white h-[40px] rounded-[5px] font-bold cursor-pointer'> {buttonName} </button>
  )
}
