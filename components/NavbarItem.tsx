"use client"
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

// type Props = {
//   title: string;
//   param: string;
// }

export default function NavbarItem({ title, param }: any) {
  const searchPrams = useSearchParams();
  const genre = searchPrams.get('genre');
  console.log(genre);

  return (
    <div className={`mx-5 hover:text-amber-400 font-semibold ${genre && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-2xl'}`}>
      <Link className='text-lg' href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}