import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      {/* <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
