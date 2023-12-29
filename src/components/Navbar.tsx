import React from "react";
import BookerLogo from "../assets/images/BookerLogo.png";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand">TDL | NOTE APPLICATION</div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ButtonGroup>
              <Button
                href="/"
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
                color="secondary"
              >
                Create Note
              </Button>
              <Button
                href="/notes"
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
                color="secondary"
              >
                Manage Notes
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
