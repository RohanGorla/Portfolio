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
                Built a weather app using React.js to show accurate weather data
                based on user input. Utilized the "useEffect" hook for API data
                fetching and an NPM package for location names. Managed user
                data with "useState" and displayed current conditions and hourly
                forecasts. Designed to be fully responsive for mobile and
                desktop devices.
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
                  Developed a Tic Tac Toe game using React with function-based
                  components. Implemented player turn tracking and winner
                  detection using the "useState" hook. Included features for
                  displaying the winner or a draw and a replay option.
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
                Created a To-Do Lists application in React, enabling users to
                create multiple lists and items. Implemented user authentication
                for secure access. Managed state with "useState" and data
                fetching with "useEffect" from an AWS MySQL database. Employed
                CRUD operations and ensured a responsive design for both mobile
                and desktop users.
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
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
