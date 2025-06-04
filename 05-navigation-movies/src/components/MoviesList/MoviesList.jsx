import css from "./MoviesList.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function MoviesList({ movies }) {
  return (
    <>
      <ul className={css.movies_list}>
        {movies.map((movie) => {
          return (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className={css.movie_link}
            >
              <li key={movie.id} className={css.movies_item}>
                <div className={css.movie_box}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                    width="260"
                  />
                  <p className={css.movie_title}>{movie.title}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
