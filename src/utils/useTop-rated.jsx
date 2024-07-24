import React from "react";
import { addnowplayingmovies, addtopratedmovies } from "./moviesslice";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addtopratedmovies(json?.results));

    console.log(json);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
