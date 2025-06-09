import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComtainer from "./SecondaryComtainer";
import usePopularMoives from "../hooks/usePopularMovies";
import useTopRatedMoives from "../hooks/useTopRatedMovies";
import useUpcomingMoives from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMoives();
  useTopRatedMoives();
  useUpcomingMoives();
  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryComtainer />
        </>
      )}
    </div>
  );
};

export default Browse;
