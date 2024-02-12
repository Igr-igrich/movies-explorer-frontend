import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import { 
  filterMovies,
  filterShortMovies, 
  numberMoviesOnPc, 
  numberMoviesOnTablet, 
  numberMoviesOnPhone,
  addMoviesOnPc,
  addMoviesOnTablet,
  addMoviesOnPhone,
  pcWidth,
  bigTabletWidth,
  smallTabletWidth,
  phoneWidth
 } from "../../utils/constants";

function Movies({
  movies,
  savedMovies,
  search,
  setSearch,
  preloader,
  errorServer,
  errorMessage,
  setErrorMessage,
  handleSaveMovie,
  handleDeleteMovie,
  isDisable
}) {
  const [moviesPerPage, setMoviesPerPage] = React.useState(0); // Количетсво отображаемых фильмов
  const [displayedMovies, setDisplayedMovies] = React.useState([]); // Фильмы, отображаемые при начальной загрузке
  const [isAllMoviesDisplayed, setIsAllMoviesDisplayed] = React.useState(false);
  const [moviesSearch, setMoviesSearch] = React.useState([]); // Фильмы по поиску
  const [addFilms, setAddFilms] = React.useState(0); // Количество добавляемых фильмов
  const [isCheckboxActive, setIsCheckboxActive] = React.useState(
    () => JSON.parse(localStorage.getItem("isCheckboxActive")) || false,
  ); // Стейт чекбокса короткометражек

  const savedSearch = JSON.parse(localStorage.getItem("search"));
  const savedMoviesSearch = JSON.parse(localStorage.getItem("moviesSearch"));

  // Сохранение в локальное хранилище
  // Строка поиска
  React.useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
  }, [search]);

  // Найденные фильмы
  React.useEffect(() => {
    localStorage.setItem("moviesSearch", JSON.stringify(moviesSearch));
  }, [moviesSearch]);

  // Чекбокс короткометражек
  React.useEffect(() => {
    localStorage.setItem("isCheckboxActive", JSON.stringify(isCheckboxActive));
  }, [isCheckboxActive]);

  // Проверка локального хранилища
  React.useEffect(() => {
    if (savedMoviesSearch) {
      setSearch(savedSearch);
      setMoviesSearch(savedMoviesSearch);
    }
  }, []);

  React.useEffect(() => {
    setMoviesPerPage(
      window.innerWidth >= pcWidth
        ? numberMoviesOnPc
        : window.innerWidth >= smallTabletWidth && window.innerWidth <= bigTabletWidth
          ? numberMoviesOnTablet
          : window.innerWidth <= phoneWidth
            ? numberMoviesOnPhone
            : 0,
    );
  }, [addFilms, search]);

  // Поиск фильмов
  React.useEffect(() => {
    if (movies.length > 0) {
      const newFilterMovies = isCheckboxActive
        ? filterMovies(filterShortMovies(movies), search)
        : filterMovies(movies, search);
      if (newFilterMovies.length > 0) {
        setMoviesSearch(newFilterMovies);
      } else if (search && newFilterMovies.length === 0) {
        setMoviesSearch([]);
      }
    }
  }, [search, movies, isCheckboxActive]);

  React.useEffect(() => {
    setIsAllMoviesDisplayed(moviesSearch.length === displayedMovies.length);
  }, [displayedMovies]);

  const showMore = () => {
    const addDisplayedMoviesSlice = search
      ? moviesSearch.slice(moviesPerPage, moviesPerPage + addFilms)
      : !search
        ? moviesSearch.slice(moviesPerPage, moviesPerPage + addFilms)
        : [];

    setMoviesPerPage(moviesPerPage + addFilms);
    setDisplayedMovies([...displayedMovies, ...addDisplayedMoviesSlice]);
  };

  React.useEffect(() => {
    if (search.length > 0) {
      const displayedMoviesSlice = search
        ? moviesSearch.slice(0, moviesPerPage)
        : !search
          ? moviesSearch.slice(0, moviesPerPage)
          : [];
      setDisplayedMovies(displayedMoviesSlice);
    } else {
      setDisplayedMovies(movies);
    }
  }, [moviesSearch, search, moviesPerPage]);

  let resizeTimeout;

  // Cлушатель события 'resize'
  React.useEffect(() => {
    const handleResize = () => {
      let showMore =
        window.innerWidth >= pcWidth
          ? addMoviesOnPc
          : window.innerWidth >= smallTabletWidth && window.innerWidth <= bigTabletWidth
            ? addMoviesOnTablet
            : window.innerWidth <= phoneWidth
              ? addMoviesOnPhone
              : 0;
      setAddFilms(showMore);
    };

    const changingScreenSizeWithTimeout = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        handleResize();
      }, 800);
    };

    changingScreenSizeWithTimeout();

    window.addEventListener("resize", changingScreenSizeWithTimeout);
    return () => {
      window.removeEventListener("resize", changingScreenSizeWithTimeout);
    };
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
        isDisable={isDisable}
      />
      {preloader ? (
        <Preloader />
      ) : displayedMovies.length === 0 && search.length > 0 ? (
        <p className="movies__error">
          {errorServer ? errorServer : "Ничего не найдено"}
        </p>
      ) : (
        displayedMovies.length > 0 && (
          <MoviesCardList
            movies={displayedMovies}
            savedMovies={savedMovies}
            showMore={showMore}
            isAllMoviesDisplayed={isAllMoviesDisplayed}
            isCheckboxActive={isCheckboxActive}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        )
      )}
    </section>
  );
}

export default Movies;
