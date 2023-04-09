import React, { useState } from "react";
import LogoutButton from "../logoutButton/logoutButton";
import LoginButton from "../loginButton/loginButton";
import RegisterButton from "../registerButton/registerButton";
import Box from "@mui/material/Box";
import "./header.css";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userId") && localStorage.getItem("token")
  );

  return (
    <Box
      sx={{
        backgroundColor: COLORS.NAVY_BLUE,
        padding: "8px",
        marginBottom: "16px",
        display: "flex",
      }}
    >
      <span className="leftSide">
        <Link
          style={{ backgroundColor: COLORS.MEDIUM_BLUE }}
          className="headerLink"
          to="/"
        >
          Home
        </Link>
        {isLoggedIn && (
          <>
            <Link
              style={{ backgroundColor: COLORS.MEDIUM_BLUE }}
              className="headerLink"
              to="/classes"
            >
              Class Management
            </Link>
            <Link
              style={{ backgroundColor: COLORS.MEDIUM_BLUE }}
              className="headerLink"
              to="/achievements"
            >
              Achievements
            </Link>
          </>
        )}
      </span>
      {!isLoggedIn && (
        <span className="rightSide">
          <LoginButton /> <RegisterButton />
        </span>
      )}
      {isLoggedIn && (
        <span className="rightSide">
          <LogoutButton login={setIsLoggedIn} />
        </span>
      )}
    </Box>
  );
};

export default Header;
