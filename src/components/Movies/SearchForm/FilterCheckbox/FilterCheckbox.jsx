import React from "react";

function FilterCheckbox({ isCheckboxActive, setIsCheckboxActive }) {
  function _handleCheckbox() {
    setIsCheckboxActive(!isCheckboxActive);
  }

  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        id="checkbox"
        onChange={_handleCheckbox}
        checked={isCheckboxActive}
      />
      <label className="filter-checkbox__label" htmlFor="checkbox">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
