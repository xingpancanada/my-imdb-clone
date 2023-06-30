import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN

export default async function Home({ searchParams }: any) {

  const genre = searchParams.genre || "fetchTrending";

  //// iIMDB apikey cannot support by NEXTJS????????
  // const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 3600 }});

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_ACCESS_TOKEN}`
    },
    next: { revalidate: 3600 }
  };

  let results: any;
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?language=en-US`, options)
    .then(response => response.json())
    .then(response => { results = response.results; console.log(response); })
    .catch(err => console.error(err));


  return (
    <main className="items-center justify-center px-24 py-6">
      <Results results={results} />
    </main>
  )
}




// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGIzMWU2NjdiZjkzMDRlNDFkZmExYjMwZDQ3N2ZiYyIsInN1YiI6IjY0OWIyNDhlMjk3NWNhMDBlN2U0YzM3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tYImPWTYZu4TsLWKIufmsjt8xoYEwOmciKM0-0zOZw'
//   }
// };

// fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));