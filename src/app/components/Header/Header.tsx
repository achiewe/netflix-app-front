"use client";

import React from 'react'
import netflixLogo from "../../../../public/assets/netflixLogo.png";
import Image from 'next/image';
export default function Header() {

  const locationReload = location.reload();
  return (
    <header className='flex flex-row w-full items-center justify-between px-[15px]'>
   <Image src={netflixLogo} alt='netflix logo' className='w-[150px] h-[80px] cursor-pointer' onClick={() => {
    locationReload
   }}/>
<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
<g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#ffffff"/> </g>
</svg>
    </header>
  )
}
