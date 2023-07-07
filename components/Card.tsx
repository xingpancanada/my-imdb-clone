import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({ result }: any) {
  return (
    <div className='cursor-pointer p-2 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-300 sm:dark:border-slate-500 sm:m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${result.id}`}>
        <Image 
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
          alt="image is not available" 
          width={500} 
          height={300} 
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className='rounded-t-lg group-hover:opacity-80 transition-opacity mb-3'
          placeholder='blur'
          blurDataURL='/spinner_xs.svg'
        />
        <div className="p-1">
          <p className='text-xs line-clamp-2 mb-1'>{result.overview}</p>
          <p className='font-bold text-sm'>{result.title || result.name }</p>
          <p className='text-xs flex items-center mt-1'>
            {result.release_date || result.first_air_date }
            <FiThumbsUp className='ml-4 mr-1' />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  )
}
