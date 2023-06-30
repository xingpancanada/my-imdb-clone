"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({
  children,
}: {children: React.ReactNode}) {
  return (
    <>
      <ThemeProvider enableSystem={true} defaultTheme='system' attribute='class'>
        <div className='dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300 min-h-screen select-none'>
          {children}
        </div>
      </ThemeProvider>
    </>
  )
}
