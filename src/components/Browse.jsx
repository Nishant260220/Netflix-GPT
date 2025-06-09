import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComtainer from "./SecondaryComtainer";
import usePopularMoives from "../hooks/usePopularMovies";
import useTopRatedMoives from "../hooks/useTopRatedMovies";
import useUpcomingMoives from "../hooks/useUpcomingMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMoives();
  useTopRatedMoives();
  useUpcomingMoives();
  return (
    <div className="">
      <Header />
      <MainContainer/>
      <SecondaryComtainer/>
      {/*
        MainContainer
          - VideoBackground
          - Video Title

        Secondary Container
          - MovieList * n
          - cards * n
      
      */}
    </div>
  );
};

export default Browse;
