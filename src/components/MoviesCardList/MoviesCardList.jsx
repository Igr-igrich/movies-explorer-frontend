import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {initialMovies.map((movie) => (
          <MoviesCard movie={movie} />
        ))}
      </ul>
      <button className="movies-card-list__more-button" type="button">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;

const initialMovies = [
  {
    name: "33 слова о дизайне",
    link: "/src/images/Movies_images/33_slova_o_dizaine.png",
    duration: 77,
    saved: true,
  },
  {
    name: "Киноальманах «100 лет дизайна»",
    link: "/src/images/Movies_images/kinoalmanakh.png",
    duration: 77,
    saved: false,
  },
  {
    name: "В погоне за Бенкси",
    link: "/src/images/Movies_images/v_pogone_za_benksi.png",
    duration: 77,
    saved: true,
  },
  {
    name: "Баския: Взрыв реальности",
    link: "/src/images/Movies_images/backia_vzriv_realnosti.png",
    duration: 77,
    saved: false,
  },
  {
    name: "Бег это свобода",
    link: "/src/images/Movies_images/beg_eto_svoboda.png",
    duration: 77,
    saved: false,
  },
  {
    name: "Книготорговцы",
    link: "/src/images/Movies_images/knigotvorci.png",
    duration: 77,
    saved: true,
  },
];
