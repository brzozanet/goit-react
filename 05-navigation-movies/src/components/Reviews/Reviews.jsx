import css from "./Reviews.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

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
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieReviews(response.results);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <>
      <ul className={css.review_list}>
        {movieReviews.map((review) => (
          <li key={review.id} className={css.review_item}>
            <p className={css.review_author}>{review.author}:</p>
            <p className={css.review_content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
