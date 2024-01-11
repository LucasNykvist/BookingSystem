import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const NewNavbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap>
            TDL
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NewNavbar;
