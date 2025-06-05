import React from "react";
import type { Movie } from "../types/movie.dtos";
import MovieCard from "./MovieCard";

interface MovieCardProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieCardProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div> No results found.</div>;
  }
  return (
    <div className="movie-list">
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
