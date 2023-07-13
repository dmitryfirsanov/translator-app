import { Routes, Route, Link } from "react-router-dom";

import translatorAppIcon from "./icons/translator-app-icon.svg";

import TextPage from "./components/TextPage";
import DocumentsPage from "./components/DocumentsPage";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <>
      <header className="header">
        <Link className="header-logo" to="/">
          <img src={translatorAppIcon} alt="Translator app" />
          <p className="header-logo-title">Translator app</p>
        </Link>
        <div className="header-nav">
          <Link className="nav-link" to="/text">Текст</Link>
          <Link className="nav-link" to="/document">Документы</Link>
        </div>
      </header>
      <div className="page">
        <Routes>
          <Route index element={<TextPage />} />
          <Route path="text" element={<TextPage />} />
          <Route path="document" element={<DocumentsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;