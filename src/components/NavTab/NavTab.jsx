import "./NavTab.css";

export default function NavTab() {
  return (
    <section className="nav-tab">
        <div className="content__container">
            <nav className="nav-tab__links">
                <a className="nav-tab__link" href="#AboutProject">О проекте</a>
                <a className="nav-tab__link" href="#Techs">Технологии</a>
                <a className="nav-tab__link" href="#AboutMe">Студент</a>
            </nav>
        </div>
    </section>
  );
}