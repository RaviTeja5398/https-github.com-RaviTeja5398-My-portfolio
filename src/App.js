import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/contact" element={<ContactMe />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
