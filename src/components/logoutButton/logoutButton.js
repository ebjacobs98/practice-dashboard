import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const LogoutButton = ({ login }) => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    login(false);
    navigate("/");
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
