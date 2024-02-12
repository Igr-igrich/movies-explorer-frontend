export const Movie_URL = "https://api.nomoreparties.co/";

const shorMoviesDuration = 40;

export const numberMoviesOnPc = 12;
export const numberMoviesOnTablet = 8;
export const numberMoviesOnPhone = 5;

export const addMoviesOnPc = 3;
export const addMoviesOnTablet = 2;
export const addMoviesOnPhone = 2;

export const pcWidth = 769;
export const bigTabletWidth = 768;
export const smallTabletWidth = 481;
export const phoneWidth = 480;

export const filterMovies = (movies, isSearch) => {
  return movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(isSearch.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(isSearch.toLowerCase()),
  );
};

export const filterShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration <= shorMoviesDuration);
};


