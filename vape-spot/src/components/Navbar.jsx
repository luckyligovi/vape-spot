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
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DirectionsRoundedIcon from "@mui/icons-material/DirectionsRounded";

function Navbar() {
  return (
    <div className="navBar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ height: 80, backgroundColor: "transparent", color: "inherit" }}
        >
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

            <h3>vape-spot</h3>

            <div  className="rightContent-navBar" >
              <Button sx={{ margin: 1 }} color="inherit">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About
                </Link>
              </Button>
              <IconButton sx={{ margin: 3 }} color="inherit">
                <DirectionsRoundedIcon />
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Get Directions
                </Link>
              </IconButton>
              <IconButton sx={{ margin: 1 }} color="inherit">
                <LocalPhoneRoundedIcon />
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </Link>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
