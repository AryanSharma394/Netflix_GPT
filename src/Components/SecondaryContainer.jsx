import React from 'react'
import MoviesList from './MoviesList'
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const movies  = useSelector((store)=>store?.movies);

  return movies.nowplayingmovies &&  (
    <div className='bg-black'>
    <div className='mt-0 md:-mt-56 relative z-20 pl-5'>
      <MoviesList title={"Now Playing"} movies ={movies?.nowplayingmovies}/>
      <MoviesList title={"Top-Rated"} movies ={movies?.addtopratedmovies}/>
      <MoviesList title={"Popular"} movies ={movies?.addpopularmovies}/>
      <MoviesList title={"New on Netflix"} movies ={movies?.addupcomingmovies}/>
      <MoviesList title={"My list"} movies ={movies?.nowplayingmovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer