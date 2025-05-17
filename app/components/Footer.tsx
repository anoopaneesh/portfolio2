'use client'
import assets from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Footer = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`mt-20 transition-colors duration-300 ${isDarkMode ? 'text-white' : ''}`}>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className='w-36 mx-auto mb-2' />

        <div className='flex w-max items-center gap-2 mx-auto font-outfit'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Email" className='w-6' />
            pk.anoop@outlook.com
        </div>
      </div>
      <div className={`text-center sm:flex items-center justify-between border-t mx-[10%] mt-12 py-6 transition-colors duration-300 ${
        isDarkMode ? 'border-gray-700' : 'border-gray-400'
      }`}>
        <p className='font-outfit'>© 2025 Anoop PK. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-outfit'>
            <li>
              <a 
                target="_blank" 
                href="https://github.com/anoopaneesh" 
                className={`transition-colors duration-300 hover:text-gray-600 ${isDarkMode ? 'hover:text-gray-300' : ''}`}
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                href="https://www.linkedin.com/in/anoop-pk" 
                className={`transition-colors duration-300 hover:text-gray-600 ${isDarkMode ? 'hover:text-gray-300' : ''}`}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                href="https://github.com/anoopaneesh" 
                className={`transition-colors duration-300 hover:text-gray-600 ${isDarkMode ? 'hover:text-gray-300' : ''}`}
              >
                Twitter
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
