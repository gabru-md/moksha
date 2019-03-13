import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-moksha">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" activeStyle={{ color: "#fff" }}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/events" activeStyle={{ color: "#fff" }}>
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeStyle={{ color: "#fff" }}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sponsors" activeStyle={{ coloc : "#fff" }}>
              Sponsors
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
