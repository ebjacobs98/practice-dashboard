import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { COLORS } from "../../../constants/constants";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const isResume = location.pathname.includes("/resume");
  const isAbout = location.pathname.includes("/about");
  const isHome = !isResume && !isAbout;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.DARK_GREEN,
        color: COLORS.WHITE,
      }}
    >
      <Box
        sx={{
          fontSize: "48px",
        }}
      >
        <Box sx={{ padding: "8px" }}>Elliot Jacobs</Box>
      </Box>
      <Box sx={{ padding: "20px" }}>
        <Link
          className={isHome ? "selectedHeaderLink" : "mainHeaderLink"}
          to="/"
        >
          Portfolio
        </Link>

        <Link
          className={isResume ? "selectedHeaderLink" : "mainHeaderLink"}
          to="/resume"
        >
          Resume
        </Link>
        <Link
          className={isAbout ? "selectedHeaderLink" : "mainHeaderLink"}
          to="/about"
        >
          About
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
