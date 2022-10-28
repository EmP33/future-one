import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Global.styles";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
