import { Link } from "react-router-dom";

import errorIcon from '../assets/icons/error-icon.svg';
import './styles/errorPage.css'

function ErrorPage() {
  return (
    <div className="page-error">
      <img src={errorIcon} alt="Error" />
      <h2>Страница не найдена</h2>
      <p>Возможно вы что-то неправильно ввели в адресной строке</p>
      <Link className="go-home" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default ErrorPage;