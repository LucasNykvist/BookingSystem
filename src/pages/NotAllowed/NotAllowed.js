import React from "react";
import Navbar from "../../components/Navbar";
import { Button } from "@mui/material";

const NotAllowed = () => {
  return (
    <>
      <div className="container-fluid-not">
        <div className="not-found-container">
          <h1>403</h1>
          <h2 style={{ color: "red" }}>RESOURCE FORBIDDEN</h2>
          <h3>PLEASE LOGIN OR REGISTER</h3>
          <Button className="not-found-button" variant="contained" href="/">
            Go To Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotAllowed;
