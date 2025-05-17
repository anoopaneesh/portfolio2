'use client'
import assets from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Contact = () => {
    const [result, setResult] = useState("");
    const { isDarkMode } = useDarkMode();

    const onSubmit = async (event:any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "72b08969-764e-44fa-99d4-2ddd4c93b86d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id="contact" className={`font-outfit w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-300 
    ${isDarkMode 
      ? 'text-white' 
      : 'bg-no-repeat bg-[url(/footer-bg-color.png)] bg-center bg-[length:90%_auto]'}`}>
      <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Have a project in mind or want to discuss potential collaborations? I'm always excited to connect with fellow developers and clients. Whether you have questions about my work, want to explore job opportunities, or just want to say hello, feel free to reach out. I'll get back to you as soon as possible!
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-(--gridauto) gap-6 mt-10 mb-8'>
            <input 
              name="name" 
              type="text" 
              placeholder='Enter your name' 
              required
              className={`flex-1 p-3 outline-none border-[0.5px] rounded-md transition-colors duration-300
              ${isDarkMode 
                ? 'border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:border-gray-500' 
                : 'border-gray-400 bg-white focus:border-gray-600'}`}
            />
            <input 
              name='email' 
              type="email" 
              placeholder='Enter your email'
              required 
              className={`flex-1 p-3 outline-none border-[0.5px] rounded-md transition-colors duration-300
              ${isDarkMode 
                ? 'border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:border-gray-500' 
                : 'border-gray-400 bg-white focus:border-gray-600'}`}
            />
        </div>
        <textarea 
          name="message" 
          rows={6} 
          placeholder='Enter your message'
          required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 transition-colors duration-300
          ${isDarkMode 
            ? 'border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:border-gray-500' 
            : 'border-gray-400 bg-white focus:border-gray-600'}`}
        ></textarea>
        <button
          type='submit'
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto transition-all duration-300
          ${isDarkMode 
            ? 'bg-white text-gray-900 hover:bg-gray-200' 
            : 'bg-black/80 text-white hover:bg-black'}`}
        >
          Submit now <Image src={isDarkMode ? assets.arrow_icon : assets.right_arrow_white} alt="submit" className='w-4' />
        </button>

        <p className={`mt-4 text-center ${isDarkMode ? 'text-gray-300' : ''}`}>{result}</p>
      </form>
    </div>
  )
}

export default Contact
