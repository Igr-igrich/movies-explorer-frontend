import React from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm({
  search,
  setSearch,
  isCheckboxActive,
  setIsCheckboxActive,
  errorMessage,
  setErrorMessage,
  isDisable
}) {
  // const savedSearch = JSON.parse(localStorage.getItem("search"));
  const [submitSearch, setSubmitSearch] = React.useState(search);

  React.useEffect(() => {
    setSubmitSearch(search)
  }, [search])

  

  function _handleChange(evt) {
    setSubmitSearch(evt.target.value);
    setErrorMessage("");
  }

  function _handleSubmit(evt) {
    evt.preventDefault();
    !submitSearch
      ? setErrorMessage("Нужно ввести ключевое слово")
      : setErrorMessage("");
    setSearch(submitSearch);
  }

  return (
    <form className="search-form" onSubmit={_handleSubmit}>
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          value={submitSearch}
          onChange={_handleChange}
        />
        <button
          className="search-form__button"
          type="submit"
          onClick={_handleSubmit}
          disabled={isDisable}
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
