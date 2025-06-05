import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import type { Movie } from "../types/movie.dtos";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [movieData, setmovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("movie");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getMovieData = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await axios.get(
        `http://www.omdbapi.com/?apikey=98eda98d&s=${searchQuery}`
      );
      setmovieData(data?.data?.Search);
    } catch (error) {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, [searchQuery]);

  const hanldeSearch = () => {
    setSearchQuery(inputValue);
  };

  return (
    <>
      <h1>Movie Search App</h1>
      <SearchBar
        inputValue={inputValue}
        onChange={setInputValue}
        onSearch={hanldeSearch}
      />
      {loading && <p>Loading...</p>}
      <MovieList movies={movieData} />
    </>
  );
};

export default HomePage;
