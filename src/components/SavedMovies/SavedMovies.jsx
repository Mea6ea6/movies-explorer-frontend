import "../Content/Content.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMovies(props) {
  const { loggedIn } = props;
  return (
    <main className="content">
      <div className="content__container">
        <SearchForm />
      </div>
      <div className="content__container">
        <MoviesCard loggedIn={loggedIn} />
      </div>
    </main>
  );
}
