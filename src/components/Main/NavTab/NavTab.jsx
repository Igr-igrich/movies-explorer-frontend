import React from "react";

function NavTab() {
  return (
    <nav className="navTab-list">
      <a className="navTab-list__link" href="#about-project">
        О проекте
      </a>
      <a className="navTab-list__link" href="#techs">
        Технологии
      </a>
      <a className="navTab-list__link" href="#about-me">
        Студент
      </a>
    </nav>
  );
}

export default NavTab;
