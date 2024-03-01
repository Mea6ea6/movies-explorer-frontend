import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
        <MoviesCard />
        <button className="movies-card-list__button">Ещё</button>
    </section>
  );
}