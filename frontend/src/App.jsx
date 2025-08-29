import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Sepetes from "./pages/sepetes/Sepetes";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sepetes" element={<Sepetes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
