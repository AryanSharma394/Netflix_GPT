import React from "react";
import { addnowplayingmovies } from "./moviesslice";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addnowplayingmovies(json?.results));

    // console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
