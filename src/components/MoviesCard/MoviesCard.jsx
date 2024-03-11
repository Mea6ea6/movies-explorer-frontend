import "./MoviesCard.css";

import cardImage from "../../images/movies-card/__image-0.png";

export default function MoviesCard(props) {
  const { loggedIn } = props;
  return (
    <div className="movies-card__box">
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImage} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like movies-card__like_active"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
    </div>
  );
}
