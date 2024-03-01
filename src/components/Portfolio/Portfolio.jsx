import "./Portfolio.css";
import "../Content/Content.css";

import portfolioArrowImage from "../../images/portfolio/__arrow.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
        <div className="content__container">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__works">
                <a className="portfolio__work" target="_blank" href="https://mea6ea6.github.io/mesto/">
                    Mesto
                    <img className="portfolio__work-icon" src={portfolioArrowImage} alt="open" />
                </a>
                <a className="portfolio__work" target="_blank" href="https://mea6ea6.github.io/russian-travel/">
                    Russian travel
                    <img className="portfolio__work-icon" src={portfolioArrowImage} alt="open" />
                </a>
                <a className="portfolio__work" target="_blank" href="https://mea6ea6.github.io/how-to-learn/">
                    How to learn
                    <img className="portfolio__work-icon" src={portfolioArrowImage} alt="open" />
                </a>
            </div>
        </div>
    </section>
  );
}