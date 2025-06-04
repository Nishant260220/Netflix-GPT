import React, { useEffect, useState } from "react";
import { API_Constants } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  console.log("Trailer Video", trailerVideo);


  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/552524/videos?language=en-US",
      API_Constants
    );
    const json = await data.json();
    console.log("MovieVideos -->  ", json);

    const filteredMovie = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredMovie.length ? filteredMovie[0] : json.results[0];
    console.log("Trailer --> ", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      {<iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=K2rhwN3-yfhArP2-`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>}
    </div>
  );
};

export default VideoBackground;
