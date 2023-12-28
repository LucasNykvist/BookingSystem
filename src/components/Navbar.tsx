import React from "react";
import BookerLogo from "../assets/images/BookerLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand">TDL | NOTE APPLICATION</div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
