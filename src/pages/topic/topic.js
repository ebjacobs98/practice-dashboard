import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TopicTitles } from "../../constants/constants";
import Header from "../../components/header/header";
import { useCurrentUser } from "../../queries/userQueries";

const Topic = ({ type }) => {
  const { data: user, isLoading } = useCurrentUser();
  if (isLoading) {
    return (
      <>
        <Header />
        <Box
          sx={{
            width: "80%",
            marginLeft: "10%",
            height: 300,
            backgroundColor: "primary.dark",
          }}
        >
          {TopicTitles[type] + " is Loading"}
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                opacity: 0.9,
              },
            }}
          >
            Start Round
          </Button>
        </Box>
      </>
    );
  }
  if (user && user !== "Not Authorized") {
    return (
      <>
        <Header />
        <Box
          sx={{
            width: "80%",
            marginLeft: "10%",
            height: 300,
            backgroundColor: "primary.dark",
          }}
        >
          <Box>{"High Score: " + user.topics[type].fastestTime}</Box>
          <Box>
            {"Total Questions Answered: " + user.topics[type].questionsAnswered}
          </Box>
          <Box>{TopicTitles[type] + " for " + user.name}</Box>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                opacity: 0.9,
              },
            }}
          >
            Start Round
          </Button>
        </Box>
      </>
    );
  }
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "80%",
          marginLeft: "10%",
          height: 300,
          backgroundColor: "primary.dark",
        }}
      >
        <Box sx={{ display: "block" }}>{TopicTitles[type]}</Box>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "white",
              opacity: 0.9,
            },
          }}
        >
          Start Round
        </Button>
      </Box>
    </>
  );
};

export default Topic;

Topic.propTypes = {
  type: PropTypes.string,
};
