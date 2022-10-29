import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Global.styles";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

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
