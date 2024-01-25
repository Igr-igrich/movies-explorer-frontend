import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__item navigation__main">
        Главная
      </NavLink>
      <NavLink
        to="/movies"
        className="navigation__item navigation__item_active"
      >
        Фильмы
      </NavLink>
      <NavLink to="/saved-movies" className="navigation__item">
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
