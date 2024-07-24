import { addpopularmovies } from "./moviesslice";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getpopularmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addpopularmovies(json?.results));

    // console.log(json);
  };

  useEffect(() => {
    getpopularmovies();
  }, []);
};

export default usePopularMovies;
