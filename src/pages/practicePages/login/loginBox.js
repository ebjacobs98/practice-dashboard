import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLogin } from "../../../queries/userQueries";
import Header from "../../../components/practice/header/header";
import { COLORS } from "../../../constants/constants";

const LoginBox = () => {
  const navigate = useNavigate();
  const { isLoading, data, mutateAsync } = useLogin();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  useEffect(() => {
    if (data?.token && data?._id) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data._id);
      navigate("/practiceApp");
    } else if (
      localStorage.getItem("userId") &&
      localStorage.getItem("token")
    ) {
      navigate("/practiceApp");
    }
  }, [data, navigate]);

  const onTextChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value });
  };
  const submitForm = () => {
    mutateAsync(loginInfo);
  };
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
            label="Email"
            id="email"
            value={loginInfo.email}
            onChange={onTextChange}
            disabled={isLoading}
          />
        </div>
        <div>
          <TextField
            required
            label="Password"
            id="password"
            value={loginInfo.password}
            onChange={onTextChange}
            disabled={isLoading}
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

export default LoginBox;
