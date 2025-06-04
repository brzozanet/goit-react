import css from "./TrendingToday.module.css";
import { useState, useEffect } from "react";
import { Loader } from "../Loader/Loader";
import { MoviesList } from "../MoviesList/MoviesList";

export function TrendingToday() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjA5NmFkZmMwMmIxZDk1MDNjY2EzOTY3MWYxOTYxOCIsInN1YiI6IjY0NjY3MGJhZDE4NTcyMDEwMTk2YzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V5Zu5ba5gw74fGGBNm2CovduoufddrTKHZqKyun9LX0",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setTrendingMovies(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today </h1>
      {isLoading ? <Loader /> : <MoviesList movies={trendingMovies} />}
    </>
  );
}
