import React from 'react'

interface CustomButtonProps{
buttonName:string;
onClick: () => void;
}

// component customButton
export default function CustomButton({buttonName, onClick}:CustomButtonProps) {
  return (
    <button className={`w-full text-white bg-[red] h-[40px] rounded-[5px] font-bold cursor-pointer hover:opacity-60`} onClick={onClick}> {buttonName} </button>
  )
}
