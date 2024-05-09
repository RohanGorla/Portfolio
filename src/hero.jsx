import "./header.css";
import profile_image from "./profile_image.jpg";

export default function Header() {
  return (
    <>
      <div className="navBar">
        <nav className="nav">
          <a href="https://rohan-official-portfolio.netlify.app/">
            <span>Home</span>
          </a>
          <a href="" target="_blank">
            <span>Contact</span>
          </a>
          <a href="" target="_blank">
            <span>Projects</span>
          </a>
          <a href="" target="_blank">
            <span>Resume</span>
          </a>
        </nav>
      </div>
      <div className="header">
        <div className="hero">
          <div className="title-container">
            <div className="title">
              <h1>
                Hi, I am <span style={{ color: "red" }}>Rohan</span>
              </h1>
              <h3>
                I'm a <span style={{ color: "red" }}>Frontend</span> Web
                Developer
              </h3>
              <p>
                With a passion to build websites that are interactive & user
                friendly and always striving to learn more and get better to
                stay udated with the current technologies.
              </p>
            </div>
          </div>
          <div className="image">
            <div className="image-background"></div>
            <img src={profile_image}></img>
          </div>
        </div>
      </div>
    </>
  );
}
