import React from "react";
import "./ComponentsStyles/navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../sparue.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {" "}
            <img className="Navbar-logo" src={logo} alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="navbar-toggler-icon fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  activeClassName="current"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/Services"
                  activeClassName="current"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/CaseStudy"
                  activeClassName="current"
                >
                  Case Studies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to="/About"
                  activeClassName="current"
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
