import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div brand-container>
        <img
          className="brand-logo"
          src={process.env.PUBLIC_URL + "/SpiceLogo.png"}
        ></img>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about-us">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a>Locations</a>
        </li>
        <li className="nav-item">
          <a>Wholesale</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
