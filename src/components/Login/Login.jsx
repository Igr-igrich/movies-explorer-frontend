import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="auth-form">
      <Link to="/">
        <img className="auth-form__logo" alt="логотип" src={logo} />
      </Link>
      <h2 className="auth-form__title">Рады видеть!</h2>
      <form className="auth-form__form">
        <div className="auth-form__cell">
          <span htmlFor="email" className="auth-form__subtitle">
            E-mail
          </span>
          <input
            className="auth-form__input"
            type="email"
            id="email"
            name="email"
            minLength="2"
            maxLength="40"
            placeholder="Введите Email"
            required
          />
          <span className="auth-form__error-validate"></span>
        </div>
        <div className="auth-form__cell">
          <span htmlFor="password" className="auth-form__subtitle">
            Пароль
          </span>
          <input
            className="auth-form__input"
            type="password"
            id="password"
            name="password"
            minLength="2"
            maxLength="200"
            placeholder="Введите пароль"
            required
          />
          <span className="auth-form__error-validate"></span>
        </div>
        <button
          className="auth-form__button auth-form__button_login"
          type="submit"
        >
          Войти
        </button>
        <p className="auth-form__text">
          Еще не зарегестрированы?
          <Link to="/signup" className="auth-form__link">
            {" "}
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
