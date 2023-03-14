import React, { useState } from "react";
import LogoutButton from "../logoutButton/logoutButton";
import LoginButton from "../loginButton/loginButton";
import RegisterButton from "../registerButton/registerButton";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userId") && localStorage.getItem("token")
  );

  return (
    <div className="header">
      <span className="leftSide">
        <Link className="homeLink" to="/">
          Home
        </Link>
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
    </div>
  );
};

export default Header;