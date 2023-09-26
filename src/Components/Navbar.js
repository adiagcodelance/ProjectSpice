import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <img
        className="brand-logo"
        src={process.env.PUBLIC_URL + "/SpiceLogo.png"}
      ></img>
      <ul className="nav-menu">
        <li className="nav-item">
          <a>Home</a>
        </li>
        <li className="nav-item">
          <a>About Us</a>
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
