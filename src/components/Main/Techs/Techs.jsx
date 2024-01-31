function Tech() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__info">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__container">
        <li className="techs__tool">HTML</li>
        <li className="techs__tool">CSS</li>
        <li className="techs__tool">JS</li>
        <li className="techs__tool">React</li>
        <li className="techs__tool">Git</li>
        <li className="techs__tool">Express.js</li>
        <li className="techs__tool">MongoDB</li>
      </ul>
    </section>
  );
}

export default Tech;
