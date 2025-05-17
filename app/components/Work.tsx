import assets, { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id="work"  className='font-outfit w-full px-[12%] py-10 scroll-mt-20'>
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
               <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 '>
               <div>
                    <h2 className='font-semibold'>{title}</h2>
                    <p className='text-sm text-gray-700'>{description}</p>
                </div>
                <a href={link} target='_blank'>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon} alt="Send icon" className='w-5' />
                </div>
                </a>
                </div>
            </div>
        ))}
      </div>
      <a href="https://github.com/anoopaneesh" target="_blank" rel="noopener noreferrer"
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'
      >Show more <Image src={assets.right_arrow_bold} alt="Show more" className='w-4'/> </a>
    </div>
  )
}

export default Work
