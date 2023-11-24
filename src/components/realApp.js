import React from "react";
import { useLocation } from "react-router-dom";
import HomeRoutes from "../routes/homeRoutes";
import PracticeRoutes from "../routes/practiceRoutes";
import { COLORS } from "../constants/constants";

const RealApp = () => {
  const location = useLocation();

  const backgroundColor = location.pathname.startsWith("/practiceApp")
    ? COLORS.LIGHT_BLUE
    : COLORS.PURPLE;

  const bodyStyle = { backgroundColor: backgroundColor, height: "100vh" };

  return (
    <div className="App" style={bodyStyle}>
      <HomeRoutes />
      <PracticeRoutes />
    </div>
  );
};

export default RealApp;
