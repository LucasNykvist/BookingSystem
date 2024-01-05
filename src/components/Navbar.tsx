import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  const getLoggedInUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedInUser(user);
      return user;
    }
    return null;
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a style={{ textDecoration: "none" }} href="/">
          <div className="navbar-brand">TDL | NOTE APPLICATION</div>
        </a>

        <div className="navbar-nav">
          <ButtonGroup>
            <Button
              href="/create-note"
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
            {loggedInUser && (
              <Button
                href="/profile"
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
              >
                Profile
              </Button>
            )}

            {loggedInUser && (
              <Button
                onClick={logoutUser}
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
              >
                Logout
              </Button>
            )}

            {!loggedInUser && (
              <Button
                href="/register"
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
                color="secondary"
              >
                Register
              </Button>
            )}

            {!loggedInUser && (
              <Button
                href="/login"
                sx={{ backgroundColor: "black", fontSize: "1rem" }}
                variant="contained"
                color="secondary"
              >
                LOGIN
              </Button>
            )}
          </ButtonGroup>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
