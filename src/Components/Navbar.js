import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="nav-brand-container">
        <img
          className="nav-brand-logo"
          src={process.env.PUBLIC_URL + "/the spice store final (1).jpg"}
          alt="Logo"
        ></img>
      </div>

      {/* Menu Button */}
      <div
        className={`menu-button ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
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
          <a className="nav-link" href="/locations">
            Locations
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/wholesale">
            Wholesale
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/restaurant-supplies">
            Restaurant Supplies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/franchise">
            Franchise
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact-us">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
