import { useDispatch } from "react-redux";
import { API_Constants } from "../utils/constants";
import { addPopularMoives } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMoives = () => {
    const dispatch = useDispatch();

//Fetch data from TMDB API and update store
const getPopularMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?page=1",
    API_Constants
  );
  const json = await data.json();

  // console.log(json.results);
  dispatch(addPopularMoives(json.results));
};

useEffect(() => {
  getPopularMovies();
}, []);

}

export default usePopularMoives;