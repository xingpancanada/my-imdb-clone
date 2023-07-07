"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  
  function handleSubmit(e: any) {
    e.preventDefault();
    if(!search) return;
    //console.log("search: " + e.target.value);
    router.push(`/search/${search}`);
  }

  return (
    <div className='mt-4'>
      <form
        onSubmit={handleSubmit} 
        className='flex max-w-6xl mx-auto justify-between items-center'>
        <input 
          value={search}
          onChange={(event: any) => setSearch(event.target.value)}
          type='text' 
          placeholder='Search keywords...' 
          className='w-full px-6 h-14 rounded placeholder:italic placeholder:text-slate-300 placeholder:dark:text-slate-500 bg-transparent  dark:bg-gray-700 dark:text-gray-100 outline-0 flex-1 shadow mx-2' />
        <button 
          disabled={!search}
          type="submit" 
          className='text-amber-600 px-6 disabled:text-gray-500 font-semibold'>
          SEARCH
        </button>
      </form>
    </div>
  )
}
