import React from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
        />
        <button className="search-form__button" type="submit"></button>
      </div>
      <FilterCheckbox></FilterCheckbox>
    </form>
  );
}

export default SearchForm;
