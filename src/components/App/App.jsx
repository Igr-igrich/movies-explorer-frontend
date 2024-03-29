import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="pages">
      {["/", "/movies", "/saved-movies", "/profile"].includes(
        location.pathname,
      ) && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {["/", "/movies", "/saved-movies"].includes(location.pathname) && (
        <Footer />
      )}
    </div>
  );
}

export default App;
