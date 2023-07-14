import { Link, Outlet } from 'react-router-dom';

import translatorAppIcon from "../assets/icons/translator-app-icon.svg";

function Layout() {
  return (
    <>
      <header className="header">
        <Link className="header-logo" to="/">
          <img src={translatorAppIcon} alt="Translator app" />
          <p>Translator app</p>
        </Link>
        <div className="header-nav">
          <Link className="nav-link" to="/text">Текст</Link>
          <Link className="nav-link" to="/document">Документы</Link>
        </div>
      </header>
      <div className="page">
        <Outlet />
      </div>
    </>
  )
}

export default Layout;