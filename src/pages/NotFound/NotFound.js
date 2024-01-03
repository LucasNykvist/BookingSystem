import { Button } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <div className="container-fluid-not">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Button className="not-found-button" variant="contained" href="/">
          Go To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
