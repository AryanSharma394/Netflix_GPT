import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const Maincontainer = () => {
    const movies = useSelector(store => store.movies?.nowplayingmovies);
    if(!movies) return; // early return if we dont use this we will face error because movies[0] will first access null value 

    const {overview,original_title,id} = movies[2];
    
    const mainmovie = movies[2];
    console.log(mainmovie);


  return (
    <div className='pt-[30%] md:pt-0 bg-black'>
        <VideoTitle title= {original_title} overview = {overview}/>
        <VideoBackground movieid={id}/>
    </div>
  )
}

export default Maincontainer