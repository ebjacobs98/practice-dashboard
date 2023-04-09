import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRegister } from "../../queries/userQueries";
import Header from "../../components/header/header";
import { COLORS } from "../../constants/constants";

const Register = () => {
  const navigate = useNavigate();
  const { isLoading, data, mutateAsync } = useRegister();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (data?.token && data?._id) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data._id);
      navigate("/");
    } else if (
      localStorage.getItem("userId") &&
      localStorage.getItem("token")
    ) {
      navigate("/");
    }
  }, [data, navigate]);

  const onTextChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };
  const submitForm = () => {
    if (userInfo.password !== userInfo.password2) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      mutateAsync(userInfo);
    }
  };

  const passwordHelperText = passwordError ? "Passwords do not match" : null;
  return (
    <>
      <Header />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            label="Name"
            id="name"
            value={userInfo.name}
            onChange={onTextChange}
            disabled={isLoading}
          />
        </div>
        <div>
          <TextField
            required
            label="Email"
            id="email"
            value={userInfo.email}
            onChange={onTextChange}
            disabled={isLoading}
          />
        </div>
        <div>
          <TextField
            required
            label="Password"
            id="password"
            value={userInfo.password}
            onChange={onTextChange}
            disabled={isLoading}
          />
        </div>
        <div>
          <TextField
            required
            label="Password2"
            id="password2"
            value={userInfo.password2}
            onChange={onTextChange}
            disabled={isLoading}
            error={passwordError}
            helperText={passwordHelperText}
          />
        </div>
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
            onClick={submitForm}
            disabled={isLoading}
          >
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Register;
