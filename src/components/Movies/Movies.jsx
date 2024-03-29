import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <section className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </section>
  );
}

export default Movies;
