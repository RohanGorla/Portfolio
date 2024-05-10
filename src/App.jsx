import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./hero";
import Content from "./content";
import Footer from "./footer";
import Projects from "./projects";
import resume from "./RESUME_2.pdf";

function App() {
  const contactRef = useRef(null);
  return (
    <>
      <div className="navBar">
        <nav className="nav">
          {/* <a href="https://rohan-official-portfolio.netlify.app/">
            <span>Home</span>
          </a> */}
          <a
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Contact me</span>
          </a>
          <a>
            <span>Projects</span>
          </a>
          <a href={resume} download="RESUME">
            <span>Resume</span>
          </a>
          <Link to="/about" target="_blank">
            <span>About me</span>
          </Link>
        </nav>
      </div>
      <Header />
      <Content />
      <Projects />
      <Footer ref={contactRef} />
    </>
  );
}

export default App;
