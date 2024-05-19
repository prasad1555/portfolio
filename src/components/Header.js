import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, useScrollTrigger } from "@mui/material";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const pages = ["Home", "About", "Resume", "Skills", "Portfolio", "Contact"];
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        color={trigger ? "primary" : "transparent"}
        elevation={trigger ? 4 : 0}
        sx={{ width: "100%" }}
      >
        <Toolbar sx={{ width: "90%", left: "8%" }}>
          <Box flexGrow={9}>
            <Button
              variant="text"
              sx={{
                px: 5,
                alignItems: "center",
                display: "flex",
                color: trigger ? "#fff" : "#2fb4ae",
                fontSize: "2.0rem",
                fontWeight: 900,
                justifyContent: "start",
                fontFamily: "sincopa, sans-serif !important",
                textTransform: "none",
              }}
            >
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={handleSetActive}
              >
                Siva
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  activeClass="active"
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
