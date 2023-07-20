import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import TextPage from "./pages/TextPage";
import DocumentsPage from "./pages/DocumentsPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<TextPage />} />
          <Route path="text" element={<TextPage />} />
          <Route path="document" element={<DocumentsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;