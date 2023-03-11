import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  return (
    <div>
      <Button variant="contained" onClick={login}>
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
