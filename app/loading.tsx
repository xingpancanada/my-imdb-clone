import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center mt-24'>
      <Image src="spinner.svg" alt="loading" priority={true} width={30} height={30} />
    </div>
  )
}
