import { forwardRef } from "react";
import "./footer.css";

function Footer(props, ref) {
  return (
    <div ref={ref} className="Footer-main">
      <div className="Footer">
        <div className="contact">
          <h2>Contact me</h2>
          <div className="contact-apps">
            <a href="https://www.linkedin.com/in/r0hang0rla/" target="_blank">
              <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png"></img>
            </a>
            <a href="mailto:rohangorla2010@gmail.com">
              <img src="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png"></img>
            </a>
            <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_blank"
            >
              <img src="https://downloadr2.apkmirror.com/wp-content/uploads/2023/04/36/643050b590a0c.png"></img>
            </a>
          </div>
        </div>
        <div className="work">
          <h2>My work</h2>
          <div className="work-apps">
            <a href="https://github.com/RohanGorla" target="_blank">
              <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png"></img>
            </a>
          </div>
        </div>
      </div>
      <p>
        created by <span className="name">Rohan Gorla</span>
      </p>
    </div>
  );
}

export default forwardRef(Footer);
