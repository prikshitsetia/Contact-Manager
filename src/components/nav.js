import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.branding}
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addnew" className="nav-link">
                  Add New
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
Nav.defaultProps = {
  branding: "Contact Manager",
};
Nav.propTypes = {
  branding: PropTypes.string.isRequired,
};
