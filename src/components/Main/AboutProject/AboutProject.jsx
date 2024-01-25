function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <h3 className="about-project__description_title">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__description_title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__description_subtitle">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__description_subtitle">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__time">
        <h3 className="about-project__timeline_header">1 неделя</h3>
        <h3 className="about-project__timeline_header">4 недели</h3>
        <p className="about-project__timeline_description">Back-end</p>
        <p className="about-project__timeline_description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
