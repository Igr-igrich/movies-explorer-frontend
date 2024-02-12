import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useForm } from "react-hook-form";

function Login({ onLogin, errorServer, isDisable }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    onLogin({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <section className="auth-form">
      <Link to="/">
        <img className="auth-form__logo" alt="логотип" src={logo} />
      </Link>
      <h2 className="auth-form__title">Рады видеть!</h2>
      <form
        className="auth-form__form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="auth-form__cell">
          <span htmlFor="email" className="auth-form__subtitle">
            E-mail
          </span>
          <input
            className="auth-form__input"
            type="email"
            id="email"
            placeholder="Введите Email"
            {...register("email", {
              required: "Поле обязательно к заполнению",
              maxLength: {
                value: 40,
                message: "Максимум 30 символов",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Неправильный формат Email",
              },
            })}
          />
          <span className="auth-form__validate-error">
            {errors?.email?.message}
          </span>
        </div>
        <div className="auth-form__cell">
          <span htmlFor="password" className="auth-form__subtitle">
            Пароль
          </span>
          <input
            className="auth-form__input"
            type="password"
            id="password"
            placeholder="Введите пароль"
            {...register("password", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
              maxLength: {
                value: 200,
                message: "Максимум 200 символов",
              },
            })}
          />
          <span className="auth-form__validate-error">
            {errors?.password?.message}
          </span>
        </div>
        <button
          className={`auth-form__button auth-form__button_login  ${!(!isValid || isDisable) ? "auth-form__button_active" : ""}`}
          disabled={!isValid || isDisable}
        >
          <span className="auth-form__server-error">{errorServer}</span>
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

export default Login;
