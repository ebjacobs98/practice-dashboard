import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { COLORS } from "../../constants/constants";

const LoginButton = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  return (
    <Button
      sx={{
        marginRight: "8px",
        backgroundColor: COLORS.MEDIUM_BLUE,
        "&:hover": {
          backgroundColor: COLORS.MEDIUM_BLUE,
          opacity: 0.9,
        },
      }}
      variant="contained"
      onClick={login}
    >
      Login
    </Button>
  );
};

export default LoginButton;
