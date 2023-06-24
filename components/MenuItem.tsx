import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import Link from 'next/link'
import React, { ReactNode } from 'react'


type Props = {
  title: string;
  address: string;
  Icon: any;
}

export default function MenuItem({ title, address, Icon }: Props) {
  return (
    <div className=''>
      <Link href={address} className='flex mx-2 lg:mx-4 hover:text-amber-600'>

        <Icon className='text-xl mx-1 md:invisible text-stone-900 hover:text-amber-600' />

        <p className='hidden md:block'>{title}</p>
      </Link>
    </div>
  )
}
