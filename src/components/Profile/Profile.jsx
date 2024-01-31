import React from "react";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Игорь!</h2>
      <form className="profile__form">
        <div className="profile__input-container">
          <label className="profile__label" htmlFor="name">
            Имя
          </label>
          <input
            type="text"
            id="name"
            className="profile__input profile__input_underline"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="30"
          />
          <span className="profile__validate-error"></span>
        </div>
        <div className="profile__input-container">
          <label className="profile__label" htmlFor="email">
            E-mail
          </label>
          <input
            type="text"
            className="profile__input"
            id="email"
            placeholder="E-mail"
            minLength="2"
            maxLength="30"
          />
          <span className="profile__validate-error"></span>
        </div>
      </form>
      <button className="profile__button profile__button-edit">
        Редактировать
      </button>
      <button className=" profile__button profile__button-signout">
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
