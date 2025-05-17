'use client'
import assets, { infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const About = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div id="about" className={`font-outfit w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-300 ${isDarkMode ? 'text-white' : ''}`}>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none lg:flex-shrink-0'>
            <Image src={assets.profile} alt="Profile" className="w-full rounded-3xl"/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-ovo'>
              I'm a Full-Stack Developer passionate about creating scalable, high-performance web applications.
              I specialize in React.js, Node.js, AWS, and microservices architecture.
              With a strong focus on clean code and intuitive interfaces, I love solving real-world problems through technology.
              Based in India, I'm always eager to learn, build, and innovate.
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon,iconDark,title,description},index)=>(
                    <li
                    className={`border-[0.5px] rounded-xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-1 
                    ${isDarkMode 
                      ? 'border-gray-700 hover:bg-gray-800 hover:shadow-white/20' 
                      : 'border-gray-400 hover:bg-lightHover hover:shadow-black'}`}
                    key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                        <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
                    </li>
                ))}
            </ul>
            <h4 className={`my-6 font-ovo ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5 flex-wrap max-w-2xl'>
                {toolsData.map((tool,index) => (
                    <li
                    className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer transition-all duration-500 hover:-translate-y-1 
                    ${isDarkMode 
                      ? 'border-gray-700 hover:bg-gray-800' 
                      : 'border-gray-400 hover:bg-gray-100'}`}
                     key={index}>
                        <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
