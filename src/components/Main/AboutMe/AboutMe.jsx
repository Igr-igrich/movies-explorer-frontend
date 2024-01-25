import photoProfile from "/src/images/Photo_profile.png";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <h2 className="about-me__name">Игорь</h2>
        <img
          className="about-me__photo"
          src={photoProfile}
          alt="Фото профиля"
        />
        <h3 className="about-me__subtitle">Фронтенд-разработчик, 23 года</h3>
        <p className="about-me__description">
          Я родился и живу в Волгограде, закончил московский университет МАДИ.
          Люблю заниматься спортом. Недавно начал кодить. С 2015 года работал в
          компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a href="" className="about-me__link-github">
          Github
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
