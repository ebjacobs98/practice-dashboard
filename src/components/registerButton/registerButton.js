import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const RegisterButton = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };

  return (
    <Button variant="contained" onClick={register}>
      Register
    </Button>
  );
};

export default RegisterButton;
