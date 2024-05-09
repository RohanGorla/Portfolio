import "./content.css";

export default function Content() {
  return (
    <>
      <div className="content FrontEnd">
        <div className="labels">
          <div className="skills-label">
            <h3>Frontend Skills</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="display">
          <div className="skills-main">
            <div className="skill">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bnAudKmxrYl1uhHuNV3VjSp0fYbVKhyQTYgWKFz4LA&s"></img>
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2McwGBo3NLAbkv7kolqy4OqOXKQsK0untMBWx4i6sg&s"></img>
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"></img>
              <p>Java Script</p>
            </div>
            <div className="skill">
              <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg"></img>
              <p>React.js</p>
            </div>
            <div className="skill">
              <img src="https://www.drupal.org/files/project-images/screenshot_361.png"></img>
              <p>Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content BackEnd">
        <div className="labels">
          <div className="skills-label">
            <h3>Backend Skills</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="display">
          <div className="skills-main">
            <div className="skill">
              <img src="https://ih1.redbubble.net/image.404031065.2191/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"></img>
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src="https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png"></img>
              <p>express.js</p>
            </div>
            <div className="skill">
              <img src="https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-8sw7kisf.png"></img>
              <p>npm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content Database">
        <div className="labels">
          <div className="skills-label">
            <h3>Databases</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="display">
          <div className="skills-main">
            <div className="skill">
              <img src="https://symbols.getvecta.com/stencil_27/81_sql-database.712f6a994f.jpg"></img>
              <p>SQL</p>
            </div>
            <div className="skill">
              <img src="https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png"></img>
              <p>MySQL</p>
            </div>
            <div className="skill">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQSWe9Z-7Qlr0Z_LQDj9X4LS5QVEmPbtJdtIHhEDRKw&s"></img>
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content Other">
        <div className="labels">
          <div className="skills-label">
            <h3>General Skills & Tools</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="display">
          <div className="skills-main">
            <div className="skill">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkW5QVyzoVT_A8dA6aG4Y6mf_q64EjDpnpRxm49mvUg&s"></img>
              <p>Git</p>
            </div>
            <div className="skill">
              <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png"></img>
              <p>Github</p>
            </div>
            <div className="skill">
              <img src="https://www.pngitem.com/pimgs/m/290-2909960_responsive-web-design-icon-web-design-hd-png.png"></img>
              <p>Responsive Design</p>
            </div>
            <div className="skill">
              <img src="https://pbs.twimg.com/profile_images/2199543684/ejs_400x400.png"></img>
              <p>Embedded JS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
