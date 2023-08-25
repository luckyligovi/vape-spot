import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 70 }}>
        <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon sx={{ color: "white" }} />
            <Typography
              variant="h1"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                color: "#ffff",
                fontSize: "22px",
              }}
            >
              menu
            </Typography>
          </IconButton>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2, marginBottom: 0.5 }}
          >
            <HomeRoundedIcon />
            <Typography
              variant="h5"
              color="secondary"
              component="div"
              textAlign="center"
              sx={{
                flexGrow: 1,
                textAlign: "match-parent",
                color: "secondary",
                fontSize: "14px",
                fontWeight: 300,
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <p>home</p>
              </Link>
            </Typography>
          </IconButton>
          <Typography
            variant="h5"
            textAlign="center"
            color="secondary"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left", color: "white" }}
          >
            <Typography
              sx={{ flexGrow: 4, textAlign: "right", marginRight: 10 }}
            >
              <div sx={{ fontWeight: "bold" }}>
                <Button sx={{ margin: 5 }} color="secondary">
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    About
                  </Link>
                </Button>
                <Button sx={{ margin: 5 }} color="secondary">
                  <Link
                    to="/services"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Services
                  </Link>
                </Button>
                <Button sx={{ margin: 5 }} color="secondary">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contact
                  </Link>
                </Button>
              </div>
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
