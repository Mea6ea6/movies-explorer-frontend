import { useState } from "react";
import "./SearchForm.css";

import SearchFormButtonImage from "../../images/search/__button-icon.svg";

export default function SearchForm() {
  const [isToggleActive, setIsToggleActive] = useState(false);

  function handleToggle() {
    setIsToggleActive(!isToggleActive);
  }

  return (
    <section className="search">
      <form className="search__form" action="GET">
        <div className="search__field">
          <input
            className="search__input"
            placeholder="Фильм"
            type="text"
            required
          />
          <button className="search__button">
            <img
              className="search__button-icon"
              src={SearchFormButtonImage}
              alt="search"
            />
          </button>
        </div>
        <div className="search__toggle" onClick={handleToggle}>
          <label
            className={`search__toggle-box  ${
              isToggleActive ? "search__toggle-box_active" : ""
            }`}
          >
            <input
              className={`search__toggle-input  ${
                isToggleActive ? "search__toggle-input_active" : ""
              }`}
              type="checkbox"
            />
            <div
              className={`search__toggle-circle  ${
                isToggleActive ? "search__toggle-circle_active" : ""
              }`}
            ></div>
          </label>
          <p className="search__toggle-text">Короткометражки</p>
        </div>
      </form>
      <div className="search__line"></div>
    </section>
  );
}
