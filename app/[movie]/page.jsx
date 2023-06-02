import Image from "next/image"

export async function generateStaticParams(){
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fa7ed7e4141360167c1de34d7326d7a8`)

  const res = await data.json()
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default async function MovieDetail({params}){
  const {movie} = params
  const imagePath = "https://image.tmdb.org/t/p/original"
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}popular?api_key=fa7ed7e4141360167c1de34d7326d7a8`)
  const res = await data.json()
 
  return(
    <div>
      <div className="">
        <h2 className="text-3xl font-semibold">{res.title}</h2>
        <h2 className="text-xl ">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 p-1 px-2 mt-2 rounded-sm inline-block">{res.status}</h2>
        <Image className="my-12 w-full" src={imagePath + res.backdrop_path} 
        width={2000} height={2000} priority alt={res.title} />
        <p>{res.overview}</p>
      </div>
    </div>
  )
}