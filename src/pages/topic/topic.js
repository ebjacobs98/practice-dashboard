import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { TopicTitles } from "../../constants/constants";
import Header from "../../components/header/header";
import { useCurrentUser } from "../../queries/userQueries";
import ProblemDialog from "../../components/problemDialog/problem-dialog";

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
          <Box>{`High Score: ${user.topics[type].fastestTime / 1000}s`}</Box>
          <Box>
            {"Total Questions Answered: " + user.topics[type].questionsAnswered}
          </Box>
          <Box>{TopicTitles[type] + " for " + user.name}</Box>
          <ProblemDialog type={type} />
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
        <ProblemDialog type={type} />
      </Box>
    </>
  );
};

export default Topic;

Topic.propTypes = {
  type: PropTypes.string,
};
