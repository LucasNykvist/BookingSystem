import React from "react";
import BookerLogo from "../assets/images/BookerLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          TDL | NOTE APPLICATION
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/Login"
              className="link nav-link active"
              aria-current="page"
            >
              <div className="item-1">
                <p>Login</p>
              </div>

              <div className="item-2">
                <p className="fa-beat">Login</p>
              </div>
            </NavLink>

            <NavLink
              to="/Register"
              className="link nav-link active"
              aria-current="page"
            >
              <div className="item-1">
                <p>Register</p>
              </div>

              <div className="item-2">
                <p className="fa-beat">Register</p>
              </div>
            </NavLink>

            <NavLink
              to="/allUsers"
              className="link nav-link active"
              aria-current="page"
            >
              <div className="item-1">
                <p>ALL USERS</p>
              </div>

              <div className="item-2">
                <p className="fa-beat">ALL USERS</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
