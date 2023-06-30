import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { FaInfoCircle } from 'react-icons/fa'
import Link from 'next/link'
import DarkModeSwithch from './DarkModeSwithch'

export default function Header() {
  return (
    <div className='flex justify-between items-center bg-gray-50 pb-4 dark:bg-gray-800'>
      <div className='flex mx-6 lg:mx-10 mt-6'>
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FaInfoCircle} />
      </div>
      <div className='flex mx-8 lg:mx-16 items-center space-x-4 lg:space-x-6 mt-6'>
        <DarkModeSwithch />
        <Link href="/">
          <p>
            <span className='text-lg font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
            <span className='text-xl rounded-lg'>Clone</span>
          </p>
        </Link>
      </div>
    </div>
  )
}
