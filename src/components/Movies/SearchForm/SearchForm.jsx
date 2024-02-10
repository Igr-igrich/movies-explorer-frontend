import React from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm({
  search,
  setSearch,
  isCheckboxActive,
  setIsCheckboxActive,
  errorMessage,
  setErrorMessage,
}) {
  function _handleChange(evt) {
    setSearch(evt.target.value);
    setErrorMessage("");
  }

  function _handleSubmit(evt) {
    evt.preventDefault();
    !search
      ? setErrorMessage("Нужно ввести ключевое слово")
      : setErrorMessage("");
  }

  return (
    <form className="search-form" onSubmit={_handleSubmit}>
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          value={search}
          onChange={_handleChange}
        />
        <button
          className="search-form__button"
          type="submit"
          onClick={_handleSubmit}
        />
      </div>
      {errorMessage && (
        <span className="search-form__error">{errorMessage}</span>
      )}
      <FilterCheckbox
        isCheckboxActive={isCheckboxActive}
        setIsCheckboxActive={setIsCheckboxActive}
      ></FilterCheckbox>
    </form>
  );
}

export default SearchForm;
