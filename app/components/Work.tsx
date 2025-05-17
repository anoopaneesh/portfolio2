'use client'
import assets, { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Work = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div id="work" className={`font-outfit w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-300 ${isDarkMode ? 'text-white' : ''}`}>
      <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Welcome to my portfolio showcase! Here you'll find a collection of my latest projects that demonstrate my expertise in web development. Each project reflects my commitment to creating elegant, user-friendly solutions while implementing modern technologies and best practices.
      </p>

      <div className='grid grid-cols-(--gridauto) my-10 gap-5'>
        {workData.map(({bgImage,description,title,link},index) => (
            <div key={index} style={{backgroundImage:`url(${bgImage})`}}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            >
               <div className={`w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 transition-colors
               ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div>
                    <h2 className={`font-semibold ${isDarkMode ? 'text-white' : ''}`}>{title}</h2>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
                </div>
                <a href={link} target='_blank'>
                  <div className={`border rounded-full w-9 aspect-square flex items-center justify-center transition-all duration-300
                    ${isDarkMode 
                      ? 'border-white shadow-[2px_2px_0_#fff] group-hover:bg-lime-500 group-hover:border-lime-500 group-hover:shadow-[2px_2px_0_#fff]' 
                      : 'border-black shadow-[2px_2px_0_#000] group-hover:bg-lime-300'}`}>
                    <Image 
                      src={isDarkMode ? assets.send_icon : assets.send_icon} 
                      alt="Send icon" 
                      className={`w-5 ${isDarkMode ? 'brightness-200' : ''}`} 
                    />
                  </div>
                </a>
               </div>
            </div>
        ))}
      </div>
      <a 
        href="https://github.com/anoopaneesh" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 transition-all duration-500
        ${isDarkMode 
          ? 'text-white border-white hover:bg-gray-800' 
          : 'text-gray-700 border-gray-700 hover:bg-lightHover'}`}
      >
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Show more" className='w-4'/> 
      </a>
    </div>
  )
}

export default Work
