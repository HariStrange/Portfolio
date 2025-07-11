import React from "react";
import Header from "./Header.jsx";
import Projects from "./projects";
import Home from "./Home.jsx";
import AboutUs from "./aboutus";
import Certificates from "./Certificates.jsx";
import Experience from "./experience";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

// Import React and necessary components

// Import your components here

const Main = () => {
  return (
    <div className="overflow-hidden scroll-smooth">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Main;
