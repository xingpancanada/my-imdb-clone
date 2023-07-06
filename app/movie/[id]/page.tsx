import Image from 'next/image';
import React from 'react'

async function getMovie(movieId: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
  return await res.json();
}

export default async function MoviePage({ params }: any) {
  //console.log('params', params);
  const movieId = params.id;
  const movie = await getMovie(movieId);
  
  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
      <Image 
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
          alt="movie poster" 
          width={500} 
          height={300} 
          style={{
            maxWidth: '100%',
            height: '100%',
          }}
          className='rounded-lg'
          placeholder='blur'
          blurDataURL='/spinner.svg'
        />
      <div className='p-2'>
        <p className='text-xl mb-3 font-bold text-center'>{movie.title || movie.name}</p>
        <p className='mb-3 text-justify'>
          <span className='font-semibold mr-1'>Overview:</span>
          {movie.overview}
        </p>
        <p className='mb-3 mt-3 text-sm'>
          <span className='font-semibold mr-1'>Date Released:</span>
          {movie.release_date || movie.first_air_date}
        </p>
        <p className='mb-3 mt-3 text-sm'>
          <span className='font-semibold mr-1'>Rating:</span>
          {movie.vote_count}
        </p>
      </div>
      </div>
    </div>
  )
}
