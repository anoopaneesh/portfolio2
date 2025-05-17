'use client'
import { useDarkMode } from '../context/DarkModeContext'
import React from 'react'

const DarkModeWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isDarkMode } = useDarkMode()

    return (
        <div className={`min-h-screen w-full transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
            {children}
        </div>
    )
}

export default DarkModeWrapper 