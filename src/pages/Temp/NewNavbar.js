import {
  AppBar,
  Box,
  Container,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NewNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const pages = ["Home", "Notes", "Login", "Register"];

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Typography className="logo" variant="h6" noWrap component="a">
            TDL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              color="inherit"
              size="large"
              className="menuButton"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            className="logo"
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: {
                xs: "flex",
                md: "block",
              },
              flexGrow: 1,
              fontFamily: "Anton",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TDL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NewNavbar;
