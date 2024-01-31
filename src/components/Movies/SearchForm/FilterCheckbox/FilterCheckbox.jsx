import React from "react";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" id="checkbox" />
      <label className="filter-checkbox__label" for="checkbox">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
