import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="auth-form">
      <Link to="/">
        <img className="auth-form__logo" alt="логотип" src={logo} />
      </Link>
      <h2 className="auth-form__title">Добро пожаловать!</h2>
      <form className="auth-form__form">
        <div className="auth-form__cell">
          <span htmlFor="name" className="auth-form__subtitle">
            Имя
          </span>
          <input
            className="auth-form__input"
            type="name"
            id="name"
            name="name"
            minLength="2"
            maxLength="200"
            placeholder="Введите имя"
            required
          />
          <span className="auth-form__validate-error"></span>
        </div>
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
          <span className="auth-form__validate-error"></span>
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
          <span className="auth-form__validate-error">Что-то пошло не так...</span>
        </div>
        <button className="auth-form__button" type="submit">
          Зарегистрироваться
        </button>
        <p className="auth-form__text">
          Уже зарегестрированы?
          <Link to="/signin" className="auth-form__link">
            {' '}
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
