import "./AboutProject.css";
import "../Content/Content.css";
import "../section-title/section-title.css";
import "../section-line/section-line.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="AboutProject">
      <div className="content__container">
        <h2 className="section-title">О проекте</h2>
        <div className="section-line"></div>
        <div className="about-project__items">
          <div className="about-project__item">
            <h3 className="about-project__title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__item">
            <h3 className="about-project__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__bar">
          <div className="about-project__bar-part">
            <p className="about-project__bar-caption">1 неделя</p>
          </div>
          <div className="about-project__bar-part">
            <p className="about-project__bar-caption">4 недели</p>
          </div>
        </div>
      </div>
    </section>
  );
}
