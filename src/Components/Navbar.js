import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <ul>
        <li className="nav-item">
          <label>Home</label>
        </li>
        <li className="nav-item">
          <label>About Us</label>
        </li>
        <li className="nav-item">
          <label>Locations</label>
        </li>
        <li className="nav-item">
          <label>Wholesale</label>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
