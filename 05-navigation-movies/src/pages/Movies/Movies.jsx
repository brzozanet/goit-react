import css from "./Movies.module.css";
import { useState, useEffect } from "react";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { Loader } from "../../components/Loader/Loader";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (event) => {
    setQuery(event);
  };

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
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchMovies(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [query]);

  return (
    <>
      <div className={css.movie_container}>
        <h1 className={css.movie_title}>Search movies</h1>
        {searchMovies.length === 0 ? (
          <SearchBox handleSearch={handleSearch} />
        ) : (
          ""
        )}
        {isLoading ? <Loader /> : <MoviesList movies={searchMovies} />}
      </div>
    </>
  );
}
