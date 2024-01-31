function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__content">
          <a
            href="https://github.com/Igr-igrich/how-to-learn"
            className="portfolio__content_site"
            target="blank"
          >
            <span>Статичный сайт</span>
            <span className="portfolio__content_arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__content">
          <a
            href="https://github.com/Igr-igrich/russian-travel"
            className="portfolio__content_site"
            target="blank"
          >
            <span>Адаптивный сайт</span>
            <span className="portfolio__content_arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__content">
          <a
            href="https://github.com/Igr-igrich/react-mesto-api-full-gha"
            className="portfolio__content_site"
            target="blank"
          >
            <span>Одностраничное приложение</span>
            <span className="portfolio__content_arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
