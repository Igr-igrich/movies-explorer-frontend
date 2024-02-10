import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const setActiveMain = ({ isActive }) =>
    `navigation__item navigation__main ${isActive ? "navigation__item_active" : ""}`;
  const setActiveLink = ({ isActive }) =>
    `navigation__item ${isActive ? "navigation__item_active" : ""}`;
  return (
    <nav className="navigation">
      <NavLink to="/" className={setActiveMain}>
        Главная
      </NavLink>
      <NavLink to="/movies" className={setActiveLink}>
        Фильмы
      </NavLink>
      <NavLink to="/saved-movies" className={setActiveLink}>
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
