'use client'
import assets from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Header = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : ''}`}>
      <div>
        <Image src={assets.profile_img} alt='Profile image' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Anoop P K <Image src={assets.hand_icon} alt="Hand icon" className='w-6'/></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Full-Stack Web Developer based in India</h1>
      <p className='max-w-2xl mx-auto font-ovo'>
        Passionate about building scalable systems, elegant interfaces, and delivering seamless web experiences.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 font-outfit'>
        <a
          className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-colors duration-300 ${
            isDarkMode 
              ? 'border-white bg-white text-black hover:bg-transparent hover:text-white' 
              : 'border-white bg-black text-white hover:bg-transparent hover:text-black'
          }`}
          href="#contact"
        >
          Contact me <Image src={isDarkMode ? assets.arrow_icon : assets.right_arrow_white} alt='Arrow' className='w-4'/>
        </a>
        <a 
          href="/Anoop_Resume.pdf" 
          download 
          className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-colors duration-300 ${
            isDarkMode 
              ? 'border-white hover:bg-white hover:text-black' 
              : 'border-gray-500 hover:bg-black hover:text-white'
          }`}
        >
          my resume <Image src={isDarkMode ? assets.download_icon : assets.download_icon} alt='Arrow' className='w-4'/>
        </a>
      </div>
    </div>
  )
}

export default Header
