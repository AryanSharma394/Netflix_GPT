import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const Gpt_moviesuggestions = () => {
  const { movienames, movieresults } = useSelector((store) => store.toggle);
  if (!movienames) return null;
  return (
    <div className="mt-10">
    <div className="bg-black bg-opacity-90">
      {movienames.map((movie, index) => (
        <MoviesList key={movie} title={movie} movies={movieresults[index]} />
      ))}
    </div>
    </div>
  );
};

export default Gpt_moviesuggestions;
