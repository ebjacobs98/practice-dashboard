import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const LogoutButton = ({ login }) => {
  const logOut = () => {
    localStorage.clear();
    login(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={logOut}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;

LogoutButton.propTypes = {
  login: PropTypes.func,
};
