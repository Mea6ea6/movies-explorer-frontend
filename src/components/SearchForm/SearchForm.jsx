import "./SearchForm.css";

import SearchFormButtonImage from "../../images/search/__button-icon.svg";

export default function SearchForm() {
  return (
    <section className="search">
        <form className="search__form" action="GET">
            <div className="search__field">
                <input className="search__input" placeholder="Фильм" type="text" />
                <button className="search__button">
                    <img className="search__button-icon" src={SearchFormButtonImage} alt="search" />
                </button>
            </div>
            <div className="search__toggle">
                <label className="search__toggle-box">
                    <input className="search__toggle-input" checked type="checkbox" />
                    <div className="search__toggle-circle"></div>
                </label>
                <p className="search__toggle-text">Короткометражки</p>
            </div>
        </form>
        <div className="search__line"></div>
    </section>
  );
}