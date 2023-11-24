import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { COLORS } from "../../../constants/constants";

const RegisterButton = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/practiceApp/register");
  };

  return (
    <Button
      sx={{
        backgroundColor: COLORS.MEDIUM_BLUE,
        "&:hover": {
          backgroundColor: COLORS.MEDIUM_BLUE,
          opacity: 0.9,
        },
      }}
      variant="contained"
      onClick={register}
    >
      Register
    </Button>
  );
};

export default RegisterButton;
