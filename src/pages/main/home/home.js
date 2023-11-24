import React from "react";
import Box from "@mui/material/Box";
import Header from "../../../components/main/header/header";
import HanoiVideo from "../../../components/main/hanoi2.mp4";
import "./home.css";

const Home = () => {
  return (
    <Box sx={{ marginLeft: "15%", width: "70%" }}>
      <Header />
      <div id="hanoi">
        <video width="100%" autoPlay loop muted>
          <source src={HanoiVideo} type="video/mp4" />
        </video>
        <div id="hTag">Tower of Hanoi Solver</div>
      </div>
    </Box>
  );
};

export default Home;
