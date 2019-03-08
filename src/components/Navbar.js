import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-moksha">
        <ul className="nav-list">
          <Link to="/">
            <li className="nav-item">
              <h5>Home</h5>
            </li>
          </Link>

          <Link to="/events">
            <li className="nav-item">
              <h5>Events</h5>
            </li>
          </Link>
          <Link to="/contact">
            <li className="nav-item">
              <h5>Contact</h5>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
