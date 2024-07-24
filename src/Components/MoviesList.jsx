import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {

  return (
    <div className="p-6">
        <h1 className="text-lg md:text-3xl md:mb-3 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {/* <MoviesCard image = {movies[0]?.poster_path} /> */}
          {movies && movies.length > 0 ? (
            movies.map((movie) => <MoviesCard key={movie.id} image={movie.poster_path} />)
          ) : (
            <p>loading....</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
