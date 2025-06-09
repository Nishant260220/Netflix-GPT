import { useDispatch } from "react-redux";
import { API_Constants } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMoives = () => {
    const dispatch = useDispatch();

//Fetch data from TMDB API and update store
const getUpcomingMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?page=1",
    API_Constants
  );
  const json = await data.json();

  // console.log(json.results);
  dispatch(addUpcomingMovies(json.results));
};

useEffect(() => {
  getUpcomingMovies();
}, []);

}

export default useUpcomingMoives;