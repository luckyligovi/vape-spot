import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DirectionsRoundedIcon from "@mui/icons-material/DirectionsRounded";

function Navbar() {
  return (
    <div className="navBar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{
            height: 80,
            backgroundColor: "transparent",
            color: "inherit",
            // borderBottom: "1px solid #eee",
          }}
        >
          <Toolbar variant="dense" sx={{ marginLeft: "250px", marginRight: "250px" }}>
            <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{
                mr: 2,
                marginBottom: 0.5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HomeRoundedIcon sx={{ fontSize: 32 }} />
              <Typography
                variant="body2"
                component="div"
                textAlign="center"
                sx={{ marginTop: 1, color: "white" }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </Typography>
            </IconButton>

            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                vape-spot.ke
              </Link>
            </Typography>

            <div className="rightContent-navBar">
              <IconButton sx={{ margin: 3 }} color="inherit">
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <DirectionsRoundedIcon sx={{ fontSize: 28 }} />
                  Get Directions
                </Link>
              </IconButton>
              <IconButton sx={{ margin: 1,  }} color="inherit">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}
                >
                  <LocalPhoneRoundedIcon sx={{ fontSize: 20, }} />
                  <span style={{ marginLeft: "5px" }}>+254721475143</span>
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
