import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTop-rated";
import useUpcomingMovies from "../utils/useUpcoming";
import Gpt_search from "./Gpt_search";
import { useSelector } from "react-redux";

const Browse = () => {
  const gpt_search = useSelector((store) => store.toggle.togglestate);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gpt_search ? (
        <Gpt_search />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
