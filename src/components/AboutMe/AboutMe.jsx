import "./AboutMe.css";

import AboutMeImage from "../../images/about-me/__about-me.png";

export default function AboutMe() {
  return (
    <section className="about-me" id="AboutMe">
      <div className="content__container">
          <h2 className="section-title">Студент</h2>
          <div className="section-line"></div>
          <div className="about-me__items">
              <div className="about-me__item">
                  <h2 className="about-me__name">Игорь</h2>
                  <p className="about-me__caption">Фронтенд-разработчик, 20 лет</p>
                  <p className="about-me__description">
                      Я родился в Воронеже, позже переехал в Москву, закончил там школу и колледж Информатики и программирования при Финансовом Университете. Я люблю слушать музыку, увлекюсь хайкингом и настольными играми. Начал кодить в последние года обучения в школе. Выполнял заказы знакомых, проходил практики и стажировался в малоизвестных и частных компаниях. В данный момент прохожу дополнительные курсы и развиваю навыки веб-разработки и программирования, параллельно занимаюсь поиском работы и устройством в Армянский Университет.
                  </p>
                  <a className="about-me__link" href="https://github.com/Mea6ea6">Github</a>
              </div>
              <img className="about-me__image" src={AboutMeImage} alt="my photo" />
          </div>
      </div>
  </section>
  );
}