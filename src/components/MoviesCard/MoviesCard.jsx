import React from "react";

import { Movie_URL } from "../../utils/constants";
import { useLocation } from "react-router-dom";

function MoviesCard({
  movie,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();

  const isMovieSaved = savedMovies.some(
    (savedMovie) => savedMovie.movieId === movie.id,
  );

  const onSaveMovie = () => {
    if (!isMovieSaved) {
      return handleSaveMovie(movie);
    }
    return handleDeleteMovie(movie);
  };

  const handleDelete = () => {
    handleDeleteMovie(movie);
  };

  return (
    <li className="movies-card">
      {/* <a href={movie.trailerLink} className="movie-card__trailerLink" rel="noreferrer" target="_blank"> */}
      <img
        alt={movie.nameRU}
        className="movies-card__image"
        src={movie.image.url ? `${Movie_URL}${movie.image.url}` : movie.image}
      />
      {/* </a> */}
      <div className="movies-card__wrapper">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">
          {Math.floor(movie.duration / 60)}ч {movie.duration % 60}м
        </p>
        {location.pathname === "/movies" && (
          <button
            // className="movies-card__save-button"
            className={`movies-card__save-button ${isMovieSaved && "movies-card__save-button_active"}`}
            onClick={onSaveMovie}
          />
        )}
        {location.pathname === "/saved-movies" && (
          <button
            className="movies-card__save-button movies-card__save-button_delete"
            onClick={handleDelete}
          />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
