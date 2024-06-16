import { forwardRef } from "react";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="project-component">
      <div className="projects-main">
        <h3>Projects</h3>
        <div className="projects">
          <div className="project-card">
            <div className="project-details">
              <h4 className="project-title">Weather App</h4>
              <p className="project-description">
                This is a web app that shows the current weather condition in a
                particular location. I made this app using react function
                components. React hook useEffect was used to fetch the data from
                the API.
              </p>
            </div>
            <div className="github-livesite-buttons">
              <button
                className="livesite"
                onClick={() => {
                  window.open(
                    "https://rohan-weather-app.netlify.app/",
                    "_blank"
                  );
                }}
              >
                View Site
              </button>
              <button
                className="github-repo"
                onClick={() => {
                  window.open(
                    "https://github.com/RohanGorla/Weather_App",
                    "_blank"
                  );
                }}
              >
                Git Repo
              </button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-details">
              <h4 className="project-title">TIC TAC TOE</h4>
              <div className="project-description">
                <p>
                  This is a TIC TAC TOE game made with React. It uses react's
                  useState hook to track changes and render X and O accordingly.
                  It's a fun game which can be playes by 2 people on the same
                  device.
                </p>
              </div>
            </div>
            <div className="github-livesite-buttons">
              <button
                className="livesite"
                onClick={() => {
                  window.open(
                    "https://rohan-tik-tac-toe.netlify.app/",
                    "_blank"
                  );
                }}
              >
                View Site
              </button>
              <button
                className="livesite"
                onClick={() => {
                  window.open(
                    "https://github.com/RohanGorla/TIC_TAC_TOE",
                    "_blank"
                  );
                }}
              >
                Git Repo
              </button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-details">
              <h4 className="project-title">TODO LIST APP</h4>
              <p className="project-description">
                nnfj sn fjl nfn ncnnnc nnfn dfndn fn fnfn asljn ldnfl ndn nfjsnf
                jlnf nncn nncn nfnd fn dnf nfnf naslj nldn flndn nfjs nf jln
                fnncn nncn nfnd fndn fnf nfna sljnl dnfl nd
              </p>
            </div>
            <div className="github-livesite-buttons">
              <button
                className="livesite"
                onClick={() => {
                  window.open(
                    "https://personal-todos-app.netlify.app/",
                    "_blank"
                  );
                }}
              >
                View Site
              </button>
              <button
                className="github-repo"
                onClick={() => {
                  window.open(
                    "https://github.com/RohanGorla/LISTS_APP",
                    "_blank"
                  );
                }}
              >
                Git Repo
              </button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-details">
              <h4 className="project-title">Project name</h4>
              <p className="project-description">
                nnfj sn fjl nfn ncnnnc nnfn dfndn fn fnfn asljn ldnfl ndn nfjsnf
                jlnf nncn nncn nfnd fn dnf nfnf naslj nldn flndn nfjs nf jln
                fnncn nncn nfnd fndn fnf nfna sljnl dnfl nd
              </p>
            </div>
            <div className="github-livesite-buttons">
              <button className="livesite">View Site</button>
              <button className="github-repo">Git Repo</button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-details">
              <h4 className="project-title">Project name</h4>
              <p className="project-description">
                nnfj sn fjl nfn ncnnnc nnfn dfndn fn fnfn asljn ldnfl ndn nfjsnf
                jlnf nncn nncn nfnd fn dnf nfnf naslj nldn flndn nfjs nf jln
                fnncn nncn nfnd fndn fnf nfna sljnl dnfl nd
              </p>
            </div>
            <div className="github-livesite-buttons">
              <button className="livesite">View Site</button>
              <button className="github-repo">Git Repo</button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-details">
              <h4 className="project-title">Project name</h4>
              <p className="project-description">
                nnfj sn fjl nfn ncnnnc nnfn dfndn fn fnfn asljn ldnfl ndn nfjsnf
                jlnf nncn nncn nfnd fn dnf nfnf naslj nldn flndn nfjs nf jln
                fnncn nncn nfnd fndn fnf nfna sljnl dnfl nd
              </p>
            </div>
            <div className="github-livesite-buttons">
              <button className="livesite">View Site</button>
              <button className="github-repo">Git Repo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
