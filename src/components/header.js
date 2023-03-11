import React, { useState } from "react";
import LogoutButton from "./logoutButton";
import LoginButton from "./logginButton";
import RegisterButton from "./registerButton";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userId") && localStorage.getItem("token")
  );

  return (
    <>
      {!isLoggedIn && (
        <>
          <LoginButton /> <RegisterButton />
        </>
      )}
      {isLoggedIn && (
        <>
          <LogoutButton login={setIsLoggedIn} />
        </>
      )}
    </>
  );
};

export default Header;
