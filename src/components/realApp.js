import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import LoginBox from "../pages/loginBox";
import GetUsersBox from "../pages/getUsersBox";
import Register from "../pages/register";

const RealApp = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginBox />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<GetUsersBox />} />
      </Routes>
    </div>
  );
};

export default RealApp;
