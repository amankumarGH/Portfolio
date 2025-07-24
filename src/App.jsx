import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";

const Home = () => (
  <>
    <Navbar />
    <Introduction />
    <AboutMe />
    {/* <Services /> */}
    <Portfolio />
    {/* <Contact /> */}
    {/* <Footer /> */}
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
    </Routes>
  );
};

export default App;
