import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import TextPage from "./components/TextPage";
import DocumentsPage from "./components/DocumentsPage";
import ErrorPage from "./components/ErrorPage";


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