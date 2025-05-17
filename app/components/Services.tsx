'use client'
import assets, { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Services = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div id="services" className={`font-outfit w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-300 ${isDarkMode ? 'text-white' : ''}`}>
      <h4 className='text-center mb-2 text-lg font-ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-ovo'>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        As a skilled software engineer, I offer comprehensive web development solutions using cutting-edge technologies. Specializing in ReactJS, TypeScript, NodeJS, and various modern frameworks, I deliver robust, scalable, and user-friendly applications that help businesses thrive in the digital space.
      </p>

      <div className='grid grid-cols-(--gridauto) my-10 gap-6'>
        {serviceData.map(({icon,title,description,link},index) => (
            <div key={index}
            className={`border rounded-lg px-8 py-12 cursor-pointer transition-all duration-500 hover:-translate-y-1 
            ${isDarkMode 
              ? 'border-gray-700 hover:bg-gray-800 hover:shadow-white/20' 
              : 'border-gray-400 hover:bg-lightHover hover:shadow-black'}`}
            >
                <Image src={icon} alt={title} className={`w-10 ${isDarkMode ? 'brightness-200' : ''}`}/>
                <h3 className={`text-lg my-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                <p className={`text-sm leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {description}
                </p>
                <a href={link} className={`flex items-center gap-2 text-sm mt-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'hover:text-gray-900'}`}>
                    Read more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow} alt="Read more" className='w-4' />
                </a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
