import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { COLORS } from "../../../constants/constants";

const LogoutButton = ({ login }) => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    login(false);
    navigate("/practiceApp");
  };

  return (
    <div>
      <Button
        sx={{
          backgroundColor: COLORS.MEDIUM_BLUE,
          "&:hover": {
            backgroundColor: COLORS.MEDIUM_BLUE,
            opacity: 0.9,
          },
        }}
        variant="contained"
        onClick={logOut}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;

LogoutButton.propTypes = {
  login: PropTypes.func,
};
