import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/main/home/home";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route key={"home"} path="/" element={<Home />} />
    </Routes>
  );
};

export default HomeRoutes;
