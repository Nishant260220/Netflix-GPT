import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // console.log("Trailer Video", trailerVideo);
  useMovieTrailer(movieId);

 
  return (
    <div className="w-full">
    {<iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}&playsinline=1`}

      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>}
  </div>
  
  );
};

export default VideoBackground;
