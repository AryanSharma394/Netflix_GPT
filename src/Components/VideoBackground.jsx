import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  const movietrailer = useSelector((store) => store.movies?.addmovietrailer);
  useMovieTrailer(movieid);

  return (
    <div className="w-screen md:mt-0 mt-5">
      <iframe
       className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movietrailer?.key}?si=M3zJkD9D1mq3oV-0&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin" 
      ></iframe>
    </div>
  );
};

export default VideoBackground;
