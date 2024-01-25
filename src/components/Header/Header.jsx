import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleBurgerMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleBurgerMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} className="header__logo" alt="logo" />
      </Link>
      {["/movies", "/saved-movies", "/profile"].includes(location.pathname) && (
        <div className="header__navigation">
          <Navigation />
        </div>
      )}
      {["/"].includes(location.pathname) && (
        <div className="header__authentication">
          <Link className="header__signup" to="/signup">
            <button type="submit" className="header__signup-button">
              Регистрация
            </button>
          </Link>
          <Link className="header__signin" to="/signin">
            <button type="submit" className="header__signin-button">
              Войти
            </button>
          </Link>
        </div>
      )}
      {["/movies", "/saved-movies", "/profile"].includes(location.pathname) && (
        <div className="header__profile">
          <ProfileNavigation />
        </div>
      )}
      {["/movies", "/saved-movies", "/profile"].includes(location.pathname) && (
        <>
          <button
            className="header__burger-button"
            onClick={handleBurgerMenuOpen}
          >
            <span />
          </button>
          <BurgerMenu
            isMenuOpen={isMenuOpen}
            handleBurgerMenuClose={handleBurgerMenuClose}
          />
        </>
      )}
    </header>
  );
}
