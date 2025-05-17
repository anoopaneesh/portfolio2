import assets from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
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
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
            href="#contact">Contact me <Image src={assets.right_arrow_white} alt='Arrow' className='w-4'/></a>
            <a href="/Anoop_Resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
            >my resume <Image src={assets.download_icon} alt='Arrow' className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header
