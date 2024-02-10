export const Movie_URL = "https://api.nomoreparties.co/";

export const filterMovies = (movies, isSearch) => {
  return movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(isSearch.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(isSearch.toLowerCase()),
  );
};

export const filterShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration <= 40);
};
