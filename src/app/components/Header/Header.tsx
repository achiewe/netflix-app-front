"use client";

// import files 
import React from 'react'
import netflixLogo from "../../../../public/assets/netflixLogo.png";
import BurgerSvg from "../../../../public/assets/burgerMenu.svg";
import IconClosePng from "../../../../public/assets/iconClose.png";
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/features/store';
import { setOpenFrame } from '@/app/redux/features/OpenBurgerSlice';
import BurgerFrame from '../BurgerFrame/BurgerFrame';

// add the header component
export default function Header() {
const openFrame = useSelector((store:RootState) => store.openFrame.openFrame)
 const dispatch = useDispatch()
 
  return (
    <header className='flex flex-row w-full items-center justify-between px-[15px] relative'>
   <Image src={netflixLogo} alt='netflix logo' className='w-[150px] h-[80px] cursor-pointer' onClick={() => {
    location.reload()
   }}/>

{openFrame ? <Image src={BurgerSvg} alt='burger svg' onClick={() => dispatch(setOpenFrame(false))} className='w-[45px] h-[45px] cursor-pointer'/> : <Image src={IconClosePng} alt='close icon png' onClick={() => dispatch(setOpenFrame(true))} className='w-[45px] h-[45px] cursor-pointer'/>}
<BurgerFrame/>
    </header>
  )
}
