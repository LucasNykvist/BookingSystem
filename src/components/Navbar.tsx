import React from "react";
import { Button, ButtonGroup, IconButton } from "@mui/material";

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

            <ButtonGroup>
              <Button
                href="/profile"
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
              >
                Profile
              </Button>

              <Button
                href="/register"
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
                color="secondary"
              >
                Register
              </Button>
              <Button
                href="/login"
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
                color="secondary"
              >
                LOGIN
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
