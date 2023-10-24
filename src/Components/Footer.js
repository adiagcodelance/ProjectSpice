import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="spacer"></div>
      <div className="footer-content">
        <div className="footer-element" id="footer-large-header">
          <label>Call Us At</label>
        </div>
        <div className="footer-element" id="footer-medium-header">
          <label>1 902 XXX XXXX</label>
        </div>
        <div className="footer-element" id="footer-medium-header-02">
          <label>Or Visit Us, Find A Location Near You Now!</label>
        </div>
      </div>

      <button>Locations</button>

      <div className="quick-links">
        <ul>
          <li>
            <a href="#">PRIVACY</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">SUPPORT</a>
          </li>
          <li>
            <a href="#">WHOLESALE</a>
          </li>
          <li>
            <a href="#">PEI</a>
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
            src={process.env.PUBLIC_URL + "/output-onlinepngtools.png"}
            alt="Facebook Icon"
          />
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
