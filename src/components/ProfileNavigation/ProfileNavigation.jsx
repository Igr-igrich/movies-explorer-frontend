import React from "react";
import { Link } from "react-router-dom";

function ProfileNavigation() {
  return (
    <Link to="/profile" className="profile-navigation">
      <button className="profile-navigation__button">Аккаунт</button>
    </Link>
  );
}

export default ProfileNavigation;
