import "../Sign/Sign.css";
import { NavLink } from "react-router-dom";

import signLogoImage from "../../images/sign/__logo.svg";

export default function Register() {
  return (
    <main className="content">
      <section className="sign">
        <NavLink className="sign__logo-link" to="/">
          <img className="sign__logo" src={signLogoImage} alt="movies" />
        </NavLink>
        <h1 className="sign__welcome">Добро пожаловать!</h1>
        <form className="sign__form" action="POST">
          <label className="sign__field">
            <span className="sign__field-name">Имя</span>
            <input
              className="sign__input sign__input_type_named"
              id="named"
              type="text"
              name="name"
              autoComplete="off"
              required
            />
            <span className="sign__error" id="name-error"></span>
          </label>
          <label className="sign__field">
            <span className="sign__field-name">E-mail</span>
            <input
              className="sign__input sign__input_type_mail"
              id="mail"
              type="text"
              name="mail"
              autoComplete="off"
              required
            />
            <span className="sign__error" id="mail-error"></span>
          </label>
          <label className="sign__field">
            <span className="sign__field-name">Пароль</span>
            <input
              className="sign__input sign__input_type_pass sign__input_error"
              id="pass"
              type="text"
              name="pass"
              autoComplete="off"
              required
            />
            <span className="sign__error" id="pass-error">
              Что-то пошло не так...
            </span>
          </label>
          <button className="sign__button">Зарегистрироваться</button>
        </form>
        <div className="sign__caption">
          <p className="sign__caption-text">Уже зарегистрированы?</p>
          <NavLink className="sign__caption-link" to="/signin">
            Войти
          </NavLink>
        </div>
      </section>
    </main>
  );
}
