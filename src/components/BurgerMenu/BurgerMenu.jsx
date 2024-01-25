import React from "react";
import Navigation from "../Navigation/Navigation";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";

function BurgerMenu(props) {
  return (
    <section
      className={`burger-menu ${props.isMenuOpen ? "burger-menu__opened" : ""}`}
    >
      <div className="burger-menu__container">
        <button
          className="burger-menu__button-close"
          onClick={props.handleBurgerMenuClose}
        ></button>
        <Navigation />
        <div className="burger-menu__profile">
          <ProfileNavigation />
        </div>
      </div>
    </section>
  );
}

export default BurgerMenu;
