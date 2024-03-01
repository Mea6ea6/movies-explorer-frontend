import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
        <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__line"></div>
        <div className="footer__items">
            <p className="footer__copy">© 2020</p>
            <div className="footer__links">
                <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                <a className="footer__link" href="https://github.com/Mea6ea6">Github</a>
            </div>
        </div>
    </footer>
  );
}