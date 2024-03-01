import "../Content/Content.css";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <main className="content">
      <div className="content__container">
        <SearchForm />
      </div>
      <div className="content__container">
        <Preloader />
      </div>
      <div className="content__container">
        <MoviesCardList />
      </div>
    </main>
  );
}