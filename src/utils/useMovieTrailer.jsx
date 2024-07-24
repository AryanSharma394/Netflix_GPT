import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addmovietrailer } from './moviesslice';
import {API_OPTIONS} from "./constants"

const useMovieTrailer = (movieid) => {
    
    const dispatch = useDispatch();
    const getvideodetails = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
   
      // console.log(json);
  
      const filterdata = json?.results?.filter((video) => video.type == "Trailer");
      const trailer = (filterdata.length) ? filterdata[0] : json.results[0];
      dispatch(addmovietrailer(trailer));// efficient way or we can also use useState
}
useEffect(() => {
    getvideodetails();
  },[]);
}

export default useMovieTrailer