import React from "react";
import Header from "./Header";
import Projects from "./projects";
import Home from "./home";
import AboutUs from "./aboutus";
import Certificates from "./certificates";
import Experience from "./experience";
import Skills from "./skills";
import Contactus from "./Contactus";

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
      <section id="experience">
        <Experience />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contactus />
      </section>
    </div>
  );
};

export default Main;
