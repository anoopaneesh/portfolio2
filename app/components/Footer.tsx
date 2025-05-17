import assets from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt="Logo" className='w-36 mx-auto mb-2' />

        <div className='flex w-max items-center gap-2 mx-auto font-outfit'>
            <Image src={assets.mail_icon} alt="Email" className='w-6' />
            pk.anoop@outlook.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className='font-outfit'>© 2025 Anoop PK. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-outfit'>
            <li><a target="_blank" href="https://github.com/anoopaneesh">GitHub</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/anoop-pk">LinkedIn</a></li>
            <li><a target="_blank" href="https://github.com/anoopaneesh">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
