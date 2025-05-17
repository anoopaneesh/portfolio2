'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { experienceData } from '@/assets/assets'

interface Experience {
  title: string
  company: string
  location: string
  duration: string
  logo: any // Using 'any' for now since it's an imported image
  description: string[]
}

const Experience = () => {
  return (
    <div id="experience" className='font-outfit w-full px-[12%] py-10 scroll-mt-20'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className='text-center mb-2 text-lg font-ovo'>Work Experience</h4>
        <h2 className='text-center text-5xl font-ovo'>My Journey</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
          Here's a glimpse into my professional journey and the experiences that have shaped my expertise in software development.
        </p>
      </motion.div>

      <div className='max-w-5xl mx-auto'>
        {experienceData.map((exp: Experience, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 bg-white'
          >
            <div className='flex flex-col md:flex-row items-start gap-6 mb-8'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='w-20 h-20 relative flex-shrink-0 mx-auto md:mx-0'
              >
                <Image
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className='object-contain'
                  fill
                  sizes="(max-width: 80px) 100vw"
                />
              </motion.div>
              <div className='flex-1 text-center md:text-left'>
                <h3 className='text-2xl font-semibold text-gray-800 mb-2'>{exp.title}</h3>
                <p className='text-xl text-gray-600 mb-1'>{exp.company}</p>
                <p className='text-gray-500'>{exp.location}</p>
                <p className='text-gray-500'>{exp.duration}</p>
              </div>
            </div>

            <motion.ul 
              className='space-y-4 text-gray-700 mt-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {exp.description.map((item: string, i: number) => (
                <motion.li
                  key={i}
                  className='flex items-start gap-2 text-base'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                >
                  <span className='text-lime-500 mt-1.5'>•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience 