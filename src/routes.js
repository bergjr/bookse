import Header from "components/Header";
import StandardPage from "pages/StandardPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
