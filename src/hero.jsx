import "./header.css";
import profile_image from "./images/profile_image.jpg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="hero">
          <div className="title-container">
            <div className="title">
              <h1>
                Hi, I am <span style={{ color: "red" }}>Rohan</span>
              </h1>
              <h3>
                I'm a <span style={{ color: "red" }}>Web Developer</span>
              </h3>
              <p>
                With a passion to build websites that are interactive & user
                friendly and always striving to learn more and get better to
                stay updated with the current technologies.
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
