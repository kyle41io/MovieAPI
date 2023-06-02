import Movie from "./Movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fa7ed7e4141360167c1de34d7326d7a8`)

  const res = await data.json()
  console.log(res)

  return (
    <main className="">
      
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
      </div>
      
        
    </main>
  )
}
