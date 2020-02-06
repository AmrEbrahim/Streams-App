import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Streamy
        </Link>
        <div className="form-inline">
          <Link to="/" className="nav-link">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </nav>
    );
  }
}

export default Header;
