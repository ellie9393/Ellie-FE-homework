// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul
          className="navbar-nav me-auto mb-2 mb-md-0 float-right"
          id="navbar-nav"
        >
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/houses">
              Houses
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
