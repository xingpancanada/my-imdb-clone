import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { FaInfoCircle } from 'react-icons/fa'
import Link from 'next/link'


export default function Header() {
  return (
    <div className='flex m-4 lg:m-6 justify-between items-center'>
      <div className='flex mx-4 lg:mx-6'>
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FaInfoCircle} />
      </div>
      <div className='flex mx-4 lg:mx-8'>
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
