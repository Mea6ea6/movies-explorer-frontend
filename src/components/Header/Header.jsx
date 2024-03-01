import "./Header.css";
import { NavLink } from "react-router-dom";

import headerLogoImage from "../../images/header/__logo.svg";
import headerProfileImage from "../../images/header/__profile.svg";

export default function Header(props) {
  const {loggedIn} = props;
  return (
    <header className="header">
        {loggedIn ? (
            <>
                <NavLink className="header__logo-link" to="/">
                    <img className="header__logo" src={headerLogoImage} alt="logo" />
                </NavLink>
                <div className="header__nav-links">
                    <NavLink className="header__nav-link" to="/movies">Фильмы</NavLink>
                    <NavLink className="header__nav-link" to="/saved-movies">Сохранённые фильмы</NavLink>
                </div>
                <NavLink className="header__profile" to="/profile">
                    Аккаунт
                    <img className="header__profile-img" src={headerProfileImage} alt="profile" />
                </NavLink>
                <button className="header__burger">
                    <span className="header__burger-layer"></span>
                    <span className="header__burger-layer"></span>
                    <span className="header__burger-layer"></span>
                </button>
            </>
        ) : (
            <>
                <NavLink className="header__logo-link" to="/">
                    <img className="header__logo" src={headerLogoImage} alt="logo" />
                </NavLink>
                <div className="header__auth">
                    <NavLink className="header__reg" to="/signup">Регистрация</NavLink>
                    <NavLink className="header__login" to="/signin">Войти</NavLink>
                </div>
            </>
        )}
        <div className="header__burger-box">
            <div className="header__burger-menu">
                <button className="header__burger-button"></button>
                <div className="header__nav-links">
                    <NavLink className="header__nav-link header__nav-link_acive" to="/">Главная</NavLink>
                    <NavLink className="header__nav-link" to="/movies">Фильмы</NavLink>
                    <NavLink className="header__nav-link" to="/saved-movies">Сохранённые фильмы</NavLink>
                </div>
                <NavLink className="header__profile" to="/profile">
                    Аккаунт
                    <img className="header__profile-img" src={headerProfileImage} alt="profile" />
                </NavLink>
            </div>
        </div>
    </header>
  );
}