import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  savedMovies,
  showMore,
  isAllMoviesDisplayed,
  isCheckboxActive,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {location.pathname === "/movies"
          ? movies.map((movie) => (
              <MoviesCard
                movie={movie}
                savedMovies={savedMovies}
                key={movie.id}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
              />
            ))
          : savedMovies.map((movie) => (
              <MoviesCard
                savedMovies={savedMovies}
                movie={movie}
                key={movie._id}
                handleDeleteMovie={handleDeleteMovie}
              />
            ))}
      </ul>
      {location.pathname === "/movies" && !isAllMoviesDisplayed && (
        <button
          className="movies-card-list__more-button"
          type="button"
          onClick={showMore}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
