import "./Profile.css";
import "../Content/Content.css";

export default function Profile() {
  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__welcome">Привет, Игорь!</h1>
        <form className="profile__form" method="POST">
          <div className="profile__fields">
            <label className="profile__field">
              <span className="profile__field-name">Имя</span>
              <input className="profile__field-input" value="Игорь" required />
            </label>
            <div className="profile__line"></div>
            <label className="profile__field">
              <span className="profile__field-name">E-mail</span>
              <input
                className="profile__field-input"
                value="pochta@yandex.ru"
                required
              />
            </label>
          </div>
          <div className="profile__form-box">
            <span className="profile__form-error">
              При обновлении профиля произошла ошибка.
            </span>
            <button className="profile__form-button">Сохранить</button>
          </div>
        </form>
        <button className="profile__button profile__button_edit">
          Редактировать
        </button>
        <button className="profile__button profile__button_logout">
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}
