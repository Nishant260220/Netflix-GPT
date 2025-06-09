import { useDispatch } from "react-redux";
import { API_Constants } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMoives = () => {
    const dispatch = useDispatch();

//Fetch data from TMDB API and update store
const getTopRatedMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?page=1",
    API_Constants
  );
  const json = await data.json();

  // console.log(json.results);
  dispatch(addTopRatedMovies(json.results));
};

useEffect(() => {
  getTopRatedMovies();
}, []);

}

export default useTopRatedMoives;