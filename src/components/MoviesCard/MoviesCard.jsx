import React from "react";

function MoviesCard({ movie }) {
  const name = movie.name;
  const image = movie.link;
  const duration = movie.duration;
  const isSaved = movie.saved;

  return (
    <li className="movies-card">
      <img alt={name} className="movies-card__image" src={image} />
      <div className="movies-card__wrapper">
        <h2 className="movies-card__title">{name}</h2>
        <p className="movies-card__duration">
          {Math.floor(duration / 60)}ч {duration % 60}м
        </p>
        {location.pathname === "/movies" && (
          <button
            className={`movies-card__save-button ${
              isSaved ? "movies-card__save-button_active" : ""
            }`}
          />
        )}
        {location.pathname === "/saved-movies" && (
          <button className="movies-card__save-button movies-card__save-button_delete" />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
