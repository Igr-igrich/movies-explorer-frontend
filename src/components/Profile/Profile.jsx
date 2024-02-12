import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useForm } from "react-hook-form";

function Profile({
  onSignOut,
  onUpdateUser,
  errorServer,
  successMessage,
  setSuccessMessage,
  isDisable,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  React.useEffect(() => {
    setIsButtonDisabled(true);
  }, [currentUser]);

  React.useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }, [successMessage]);

  function onSubmit(data) {
    if (data.name != currentUser.name || data.email != currentUser.email) {
      onUpdateUser({
        name: data.name,
        email: data.email,
      });
    }
  }
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form
        className="profile__form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="profile__form-container">
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            {currentUser.name && (
              <input
                id="name"
                className="profile__input profile__input_underline"
                placeholder="Ваше имя"
                autoComplete="off"
                {...register("name", {
                  value: currentUser.name,
                  onChange: (evt) => {
                    (evt.target.value === currentUser.name) ? setIsButtonDisabled(true) : setIsButtonDisabled(false)
                  },
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 2,
                    message: "Минимум 2 символа",
                  },
                  maxLength: {
                    value: 30,
                    message: "Максимум 30 символов",
                  },
                })}
              />
            )}
            {errors?.name && (
              <span className="profile__validate-error">
                {errors?.name.message}
              </span>
            )}
          </div>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>
            {currentUser.email && (
              <input
                className="profile__input"
                id="email"
                placeholder="E-mail"
                autoComplete="off"
                {...register("email", {
                  value: currentUser.email,
                  onChange: (evt) => {
                    (evt.target.value === currentUser.email) ? setIsButtonDisabled(true) : setIsButtonDisabled(false)
                  },
                  required: "Поле обязательно к заполнению",
                  maxLength: {
                    value: 30,
                    message: "Максимум 30 символов",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Неправильный формат Email",
                  },
                })}
              />
            )}

            {errors?.email && (
              <span className="profile__validate-error">
                {errors?.email.message}
              </span>
            )}
          </div>
        </div>
        <span className="profile__message profile__message_server-error">
          {errorServer}
        </span>
        <span className="profile__message profile__message_success">
          {successMessage}
        </span>
        <button
          className={`profile__button profile__button-edit ${!(isButtonDisabled || !isValid || isDisable) ? "profile__button_active" : ""}`}
          disabled={isButtonDisabled || !isValid || isDisable}
        >
          Редактировать
        </button>
      </form>

      <button
        className=" profile__button profile__button-signout profile__button_active"
        onClick={onSignOut}
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
