import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopicsArray } from "../constants/constants";

import Home from "../pages/home/home";
import LoginBox from "../pages/login/loginBox";
import GetUsersBox from "../pages/getUsersBox";
import Register from "../pages/register/register";
import Topic from "../pages/topic/topic";

const RealApp = () => {
  return (
    <div className="App">
      <Routes>
        <Route key={"home"} path="/" element={<Home />} />
        <Route key={"login"} path="login" element={<LoginBox />} />
        <Route key={"register"} path="register" element={<Register />} />
        <Route key={"users"} path="users" element={<GetUsersBox />} />
        {TopicsArray.map((entry) => (
          <Route key={entry} path={entry} element={<Topic type={entry} />} />
        ))}
      </Routes>
    </div>
  );
};

export default RealApp;
