import "./MoviesCard.css";

import cardImageOne from "../../images/movies-card/__image-0.png";
import cardImageTwo from "../../images/movies-card/__image-1.png";
import cardImageThree from "../../images/movies-card/__image-2.png";
import cardImageFour from "../../images/movies-card/__image-3.png";
import cardImageFive from "../../images/movies-card/__image-4.png";
import cardImageSix from "../../images/movies-card/__image-5.png";
import cardImageSeven from "../../images/movies-card/__image-6.png";
import cardImageEight from "../../images/movies-card/__image-7.png";
import cardImageNine from "../../images/movies-card/__image-8.png";
import cardImageTen from "../../images/movies-card/__image-9.png";
import cardImageEleven from "../../images/movies-card/__image-10.png";
import cardImageTwelve from "../../images/movies-card/__image-11.png";

export default function MoviesCard(props) {
  const { loggedIn } = props;
  return (
    <div className="movies-card__box">
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageOne} alt="image" />
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
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageTwo} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageThree} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageFour} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageFive} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageSix} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageSeven} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageEight} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageNine} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageTen} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageEleven} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
      <div className="movies-card">
        <a className="movies-card__link" href="#">
          <img className="movies-card__image" src={cardImageTwelve} alt="image" />
        </a>
        <div className="movies-card__panel">
          <div className="movies-card__panel-item">
            <p className="movies-card__name">Название</p>
            {loggedIn ? (
              <button className="movies-card__delete"></button>
            ) : (
              <button className="movies-card__like"></button>
            )}
          </div>
          <p className="movies-card__time">0ч 0м</p>
        </div>
      </div>
    </div>
  );
}
