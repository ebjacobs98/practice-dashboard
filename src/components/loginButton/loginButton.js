import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  return (
    <Button
      sx={{
        marginRight: "8px",
      }}
      variant="contained"
      onClick={login}
    >
      Login
    </Button>
  );
};

export default LoginButton;
