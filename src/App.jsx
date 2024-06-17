import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./App.css";
import Header from "./components/hero";
import Content from "./components/content";
import Footer from "./components/footer";
import Projects from "./components/projects";
import resume from "./ROHAN.pdf";

function App() {
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="navBar">
        <div
          className="hamburger-btn"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <span className="hamburger"></span>
        </div>
        <nav className={showNav ? "nav" : "nav not-visible"}>
          <a
            className="navbar-links"
            onClick={() => {
              projectRef.current?.scrollIntoView({ behavior: "smooth" });
              setShowNav(!showNav);
            }}
          >
            <span>Projects</span>
          </a>
          <a
            className="navbar-links"
            href={resume}
            download="RESUME-RohanGorla"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <span>Resume</span>
          </a>
          <a
            className="navbar-links"
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
              setShowNav(!showNav);
            }}
          >
            <span>Contact me</span>
          </a>
          <Link
            className="navbar-links"
            to="/about"
            target="_blank"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <span>About me</span>
          </Link>
        </nav>
      </div>
      <Header />
      <div ref={projectRef} className="seperation"></div>
      <Projects />
      <div className="seperation"></div>
      <Content />
      <Footer ref={contactRef} />
    </>
  );
}

export default App;
