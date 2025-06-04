import { useDispatch } from "react-redux";
import { API_Constants } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

//Fetch data from TMDB API and update store
const getNowPlayingMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_Constants
  );
  const json = await data.json();

  console.log(json.results);
  dispatch(addNowPlayingMovies(json.results));
};

useEffect(() => {
  getNowPlayingMovies();
}, []);

}

export default useNowPlayingMovies;