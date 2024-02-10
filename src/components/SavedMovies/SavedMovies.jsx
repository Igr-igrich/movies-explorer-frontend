import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

import { filterMovies, filterShortMovies } from "../../utils/constants";

function SavedMovies({
  savedMovies,
  search,
  setSearch,
  errorServer,
  errorMessage,
  setErrorMessage,
  handleDeleteMovie,
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]); // Поиск по отфильтрованным фильмам
  const [isCheckboxActive, setIsCheckboxActive] = React.useState(false);

  React.useEffect(() => {
    const filterSaveMovies = () => {
      let filterSavedMovies = isCheckboxActive
        ? filterMovies(filterShortMovies(savedMovies), search)
        : filterMovies(savedMovies, search);

      return filterSavedMovies;
    };

    setFilteredSavedMovies(filterSaveMovies);
  }, [search, savedMovies, isCheckboxActive]);

  React.useEffect(() => {
    setSearch("");
  }, []);

  return (
    <section className="movies">
      <SearchForm
        search={search}
        setSearch={setSearch}
        isCheckboxActive={isCheckboxActive}
        setIsCheckboxActive={setIsCheckboxActive}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      {savedMovies.length === 0 && search.length > 0 ? (
        <p className="movies__error">
          {errorServer ? errorServer : "Ничего не найдено"}
        </p>
      ) : (
        savedMovies.length > 0 && (
          <MoviesCardList
            savedMovies={filteredSavedMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
        )
      )}
    </section>
  );
}

export default SavedMovies;
