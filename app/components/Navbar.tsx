'use client'
import assets from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Navbar = () => {
    const [isScroll,setIsScroll] = useState(false)
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if(sideMenuRef.current)
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        if(sideMenuRef.current)
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="Header background" className='w-full' />
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300 
      ${isScroll ? (isDarkMode ? "bg-gray-900/50 backdrop-blur-lg" : "bg-white/50 backdrop-blur-lg shadow-sm") : ""}`}>
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14' />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-colors duration-300
        ${isScroll ? "" : (isDarkMode ? "bg-gray-900/50" : "bg-white/50 shadow-sm")} `}>
            <li><a className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} href="#top">Home</a></li>
            <li><a className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} href="#about">About me</a></li>
            <li><a className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} href="#services">Services</a></li>
            <li><a className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} href="#work">My Work</a></li>
            <li><a className={`font-ovo ${isDarkMode ? 'text-white' : ''}`} href="#contact">Contact me</a></li> 
        </ul>
        <div className='flex items-center gap-4'>
            <button onClick={toggleDarkMode} className="transition-transform hover:scale-110">
                <Image 
                    src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                    alt={isDarkMode ? "Light mode" : "Dark mode"} 
                    className='w-6'
                />
            </button>
            <a href="#contact" className={`font-ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 transition-colors duration-300
            ${isDarkMode ? 'border-white text-white' : 'border-gray-500'}`}>
                Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow" className='w-3' />
            </a>
            <button
            onClick={openMenu}
            className='block md:hidden ml-3'>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className='w-6'/>
            </button>
        </div>

        {/* --------------- mobile menu ------------------ */}
        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500
        ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-rose-50'}`}>
            <div
             onClick={closeMenu}
             className='absolute right-6 top-6'>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className='w-5 cursor-pointer' />
            </div>
            <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li> 
        </ul>
      </nav>
    </>
  )
}

export default Navbar
