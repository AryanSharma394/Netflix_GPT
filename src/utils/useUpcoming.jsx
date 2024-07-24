import React from "react";
import { addnowplayingmovies, addupcomingmovies } from "./moviesslice";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addupcomingmovies(json?.results));

    // console.log(json);
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
