import Results from '@/components/Results';
import React from 'react'

export default async function searchPage({params}: any) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`);

  if(!res.ok){
    throw new Error("Could not fetching data!");
  }

  const data = await res.json();
  const results = data.results;
  console.log(results);

  return (
    <div className='mt-5'>
      {results && results.length === 0 && (
        <p className='font-bold text-xl text-center pt-6'>NO RESULTS FOUND</p>
      )}
      {
        results && <Results results={results} />
      }
    </div>
  )
}
