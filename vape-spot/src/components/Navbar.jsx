import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Button from "@mui/material/Button"; // Import Button directly

function Navbar() {
  return (
    <div className="navBar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ height: 70, backgroundColor: "transparent", color: "inherit"}}>
          <Toolbar variant="dense">
            <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2, marginBottom: 0.5 }}
            >
              <HomeRoundedIcon />
              <Typography variant="h5" component="div" textAlign="center">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </Typography>
            </IconButton>

            {/* <div sx={{ flexGrow: 1, textAlign: "right", color: "white", marginLeft: "auto"  }}> */}
            <div style={{ marginLeft: "auto" }}>
              <Button sx={{ margin: 1 }} color="secondary">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About
                </Link>
              </Button>
              <Button sx={{ margin: 1 }} color="secondary">
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Services
                </Link>
              </Button>
              <Button sx={{ margin: 1 }} color="secondary">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
