import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs" id="Techs">
        <div className="content__container">
            <h2 className="section-title">Технологии</h2>
            <div className="section-line"></div>
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__items">
                <li className="techs__item">HTML</li>
                <li className="techs__item">CSS</li>
                <li className="techs__item">JS</li>
                <li className="techs__item">React</li>
                <li className="techs__item">Git</li>
                <li className="techs__item">Express.js</li>
                <li className="techs__item">mongoDB</li>
            </ul>
        </div>
    </section>
  );
}