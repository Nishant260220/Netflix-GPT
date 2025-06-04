import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComtainer from "./SecondaryComtainer";

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
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
