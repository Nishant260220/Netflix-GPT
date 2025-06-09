import { useDispatch } from "react-redux";
import { API_Constants } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_Constants
    );
    const json = await data.json();
    // console.log("MovieVideos -->  ", json);

    const filteredMovie = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredMovie.length ? filteredMovie[0] : json.results[0];
    // console.log("Trailer --> ", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
