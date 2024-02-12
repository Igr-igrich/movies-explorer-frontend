import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

import { moviesApi } from "../../utils/MoviesApi";
import { auth } from "../../utils/auth.js";
import { api } from "../../utils/MainApi.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { Movie_URL } from "../../utils/constants.js";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const logIn = localStorage.getItem("logIn");

  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [preloader, setPreloader] = React.useState(false);
  const [errorServer, setErrorServer] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(logIn);
  const [errorMessage, setErrorMessage] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [isDisable, setIsDisable] = React.useState(false);

  React.useEffect(() => {
    if (loggedIn) {
      api
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies.reverse());
        })
        .catch((err) => {
          console.log(err);
          if (err === 401) {
            setCurrentUser(null);
            setLoggedIn(false);
            localStorage.clear();
            return;
          }
        });
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          if (err === 401) {
            setCurrentUser(null);
            setLoggedIn(false);
            localStorage.clear();
            return;
          }
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    console.log('При любом поиске');
    if (search && movies.length === 0) {
      console.log("Только при первом поиске");
      setPreloader(true);
      moviesApi
        .getAllMovies()
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => {
          setErrorServer(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          );
        })
        .finally(() => {
          setPreloader(false);
        });
    }
  }, [search, movies]);

  const handleTokenCheck = (jwt) => {
    auth
      .checkToken(jwt)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      handleTokenCheck(jwt);
    }
  }, []);

  const handleRegistration = ({ name, email, password }) => {
    setIsDisable(true)
    auth
      .register(name, email, password)
      .then(() => {
        console.log("Успешно");
        return auth.login(email, password);
      })
      .then((res) => {
        localStorage.setItem("email", email);
        localStorage.setItem("logIn", true);
        setLoggedIn(true);
        setErrorServer("");
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err === 409) {
          setErrorServer("Пользоваетль с таким email уже зарегестрирован");
        }
      })
      .finally(
        setIsDisable(false)
      );
  };

  const handleLogIn = ({ email, password }) => {
    setIsDisable(true);
    auth
      .login(email, password)
      .then((res) => {
        if (!res) throw new Error("Ошибка авторизации");
        if (res) {
          localStorage.setItem("email", email);
          localStorage.setItem("logIn", true);
          setLoggedIn(true);
          setErrorServer("");
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) {
          setErrorServer("Неправильный email или пароль");
        }
      })
      .finally(
        setIsDisable(false)
      );
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setMovies([]);
    setSearch("");
    localStorage.clear();
    navigate("/", { replace: true });
  };

  const handleUpdateUser = (data) => {
    setIsDisable(true);
    api
      .changeUserInfo(data)
      .then(() => {
        setErrorServer("");
        setSuccessMessage("Данные успешно изменены");
        setCurrentUser({ ...currentUser, ...data });
      })
      .catch((err) => {
        if (err === 401) {
          setCurrentUser(null);
          setLoggedIn(false);
          localStorage.clear();
          return;
        }
        if (err === 409) {
          setErrorServer("Пользоваетль с таким email уже зарегестрирован");
        } else if (err === 400) {
          setErrorServer("Введены некорректные данные");
        }
        console.log(err);
      })
      .finally(
        setIsDisable(false)
      );
  };

  function handleSaveMovie(movie) {
    setIsDisable(true);
    const movieCard = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${Movie_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `${Movie_URL}${movie.image.url}`,
      movieId: movie.id,
    };
    api
      .saveMovie(movieCard)
      .then((saveMovie) => {
        setSavedMovies((prev) => [saveMovie, ...prev]);
      })
      .catch((error) => {
        if (err === 401) {
          setCurrentUser(null);
          setLoggedIn(false);
          localStorage.clear();
          return;
        }
        console.log(error);
      })
      .finally(
        setIsDisable(false)
      );
  }

  function handleDeleteMovie(movie) {
    setIsDisable(true)
    const movieToDelete = savedMovies.find(
      (savedMovies) => savedMovies.movieId === movie.id,
    );
    api
      .deleteMovie(movie._id || movieToDelete._id)
      .then((movieToDelete) => {
        console.log(movieToDelete);
        setSavedMovies(
          savedMovies.filter(
            (savedMovie) => savedMovie._id !== movieToDelete._id,
          ),
        );
      })
      .catch((error) => {
        if (err === 401) {
          setCurrentUser(null);
          setLoggedIn(false);
          localStorage.clear();
          return;
        }
        console.log(error);
      })
      .finally(
        setIsDisable(false)
      );
  }

  React.useEffect(() => {
    setErrorMessage("");
    setErrorServer("");
    setSuccessMessage("");
  }, [location]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="pages">
        {["/", "/movies", "/saved-movies", "/profile"].includes(
          location.pathname,
        ) && <Header loggedIn={loggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
                movies={movies}
                savedMovies={savedMovies}
                search={search}
                setSearch={setSearch}
                preloader={preloader}
                errorServer={errorServer}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                isDisable={isDisable}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                search={search}
                setSearch={setSearch}
                errorServer={errorServer}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleDeleteMovie={handleDeleteMovie}
                isDisable={isDisable}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                onSignOut={handleLogOut}
                onUpdateUser={handleUpdateUser}
                errorServer={errorServer}
                setSuccessMessage={setSuccessMessage}
                successMessage={successMessage}
                currentUser={currentUser}
                isDisable={isDisable}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRouteElement
                element={Login}
                onLogin={handleLogIn}
                errorServer={errorServer}
                isDisable={isDisable}
                loggedIn={!loggedIn}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRouteElement
                element={Register}
                onRegister={handleRegistration}
                errorServer={errorServer}
                setErrorServer={setErrorServer}
                isDisable={isDisable}
                loggedIn={!loggedIn}
              />
            }
            // element={
            //   <Register
            //     onRegister={handleRegistration}
            //     errorServer={errorServer}
            //     setErrorServer={setErrorServer}
            //   />
            // }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {["/", "/movies", "/saved-movies"].includes(location.pathname) && (
          <Footer />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
