import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="spacer"></div>
      <div className="footer-content">
        <div id="footer-large-header">
          <label>Call Us At</label>
        </div>
        <div id="footer-medium-header">
          <label>1 902 XXX XXXX</label>
        </div>
        <div id="footer-medium-header">
          <label>Or Visit Us, Find A Location Near You Now!</label>
        </div>
      </div>

      <button>Locations</button>
      <div className="spacer"></div>
      <div className="quick-links">
        <ul>
          <li>
            <a>PRIVACY</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
          <li>
            <a>SUPPORT</a>
          </li>
          <li>
            <a>WHOLESALE</a>
          </li>
          <li>
            <a>PEI</a>
          </li>
        </ul>
      </div>
      <div className="social-media-links">
        <a
          className="social-link"
          href="https://www.facebook.com/TheSpiceStorePEI"
        >
          <img
            className="social-image"
            src={process.env.PUBLIC_URL + "./output-onlinepngtools.png"}
          ></img>
        </a>
      </div>
      <div className="footer-links"></div>
      <div className="trademark-container">
        <label>© 2023 - TheSpiceStore.com | All rights reserved</label>
      </div>
    </div>
  );
};

export default Footer;
