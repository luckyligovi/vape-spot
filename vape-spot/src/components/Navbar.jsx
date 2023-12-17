import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DirectionsRoundedIcon from "@mui/icons-material/DirectionsRounded";
import exp from "./image/vape-logo.png";

function Navbar() {
  return (
    <div className="navBar">
      <Box sx={{ flexGrow: 1, padding: 0, margin: 0, }}>
        <AppBar
          position="sticky"
          sx={{
            height: 80,
            backgroundColor: "transparent",
            color: "inherit",
            // borderBottom: "1px solid #eee",
          }}
        >
          <Toolbar
            className="toolBar"
            variant="dense"
            sx={{ marginLeft: "100px", marginRight: "100px" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              {/* <IconButton
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
              > */}
              {/* <HomeRoundedIcon sx={{ fontSize: 32 }} /> */}
              <img
                src={exp}
                alt="someone using vape"
                style={{
                  height: 50,
                  margin: 1,
                  mr: 2,
                  marginBottom: 0.5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding:10
                }}
              />
              {/* <Typography
                  variant="body2"
                  component="div"
                  textAlign="center"
                  sx={{ marginTop: 1, color: "white" }}
                >
                  Home
                </Typography> */}
              {/* </IconButton> */}
            </Link>

            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                vape-spot.ke
              </Link>
            </Typography>

            <div className="rightContent-navBar">
              {/* <IconButton sx={{ margin: 3 }} color="inherit">
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <DirectionsRoundedIcon sx={{ fontSize: 20 }} />
                  <span style={{ marginLeft: "5px" }}>Get Directions</span>
                </Link>
              </IconButton> */}
              <IconButton
                className="phone-number"
                sx={{ margin: 1 }}
                color="inherit"
              >
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LocalPhoneRoundedIcon sx={{ fontSize: 20 }} />
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
