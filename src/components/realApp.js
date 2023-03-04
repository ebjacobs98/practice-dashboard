import React from "react";
import Box from "@mui/material/Box";
import { useUsers } from "../apis/userApi";

const RealApp = () => {
  const { data, isLoading } = useUsers();
  const users = isLoading ? [] : data.map((user) => user.name);
  console.log("data", data);
  if (isLoading) {
    return (
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        Loading...
      </Box>
    );
  }
  return users.map((user) => {
    return (
      <Box
        sx={{
          width: "20%",
          height: "40px",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {user}
      </Box>
    );
  });
};

export default RealApp;
