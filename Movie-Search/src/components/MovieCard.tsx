import React from "react";
import type { Movie } from "../types/movie.dtos";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img 
      src={movie.Poster !== 'N/A'? movie.Poster:'/no-image.png'}
      alt={movie.Title}
      />
      <h3>{movie.Title} ({movie.Year})</h3>
    </div>
  );
};
export default MovieCard;