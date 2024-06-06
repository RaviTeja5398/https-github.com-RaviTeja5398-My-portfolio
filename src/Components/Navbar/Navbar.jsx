import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container my-2 pl-5">
        <Link to="/" className="navbar-brand headerLink">
          sisi_tarak
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
        >
          <span className="fa-solid fa-bars ham-menu"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav font-weight-normal text-center">
            <Link to="/" className="navLink nav-link mx-1 active">
              Home
            </Link>
            <Link to="/about" className="navLink nav-link mx-2">
              About
            </Link>
            <Link to="/skills" className="navLink nav-link mx-2">
              Skills
            </Link>
            <Link to="/projects" className="navLink nav-link mx-2">
              Projects
            </Link>
            <Link to="/contact" className="navLink nav-link mx-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
