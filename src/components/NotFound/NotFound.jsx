import "../Content/Content.css";
import "../NotFound/NotFound.css";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="content">
      <div className="content__container">
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__caption">Страница не найдена</p>
            <NavLink className="not-found__link" to="/">Назад</NavLink>
        </section>
      </div>
    </main>
  );
}