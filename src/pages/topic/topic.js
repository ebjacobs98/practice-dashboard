import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { TopicTitles } from "../../constants/constants";
import Header from "../../components/header/header";
import { useCurrentUser } from "../../queries/userQueries";
import ProblemDialog from "../../components/problemDialog/problem-dialog";
import MetricsGraph from "../../components/metricsGraph/metricsGraph";
import BadgeRows from "./badgeRows";

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
            backgroundColor: "white",
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
            backgroundColor: "white",
            display: "flex",
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              justifyContent: "left",
              width: "45%",
              marginRight: "10%",
            }}
          >
            <Box sx={{ fontSize: "32px", margin: "8px" }}>{`Statistics:`}</Box>
            <Box sx={{ fontSize: "24px", margin: "8px" }}>{`High Score: ${
              user.topics[type].fastestTime / 1000
            }s`}</Box>
            <Box sx={{ fontSize: "24px", margin: "8px" }}>
              {"Total Questions Answered: " +
                user.topics[type].questionsAnswered}
            </Box>
            <BadgeRows topic={user.topics[type]} />
            {user.topics[type].metrics.length === 0 ? (
              <Box sx={{ fontSize: "24px", marginLeft: "8px" }}>
                Progress: NA
              </Box>
            ) : (
              <>
                <Box sx={{ fontSize: "24px", marginLeft: "8px" }}>
                  Progress:
                </Box>
                <MetricsGraph metrics={user.topics[type].metrics} />
              </>
            )}
          </Box>
          <Box
            sx={{
              textAlign: "center",
              width: "45%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "16px",
            }}
          >
            <Box
              sx={{ marginBottom: "16px", fontSize: "24px" }}
            >{`Subject: ${TopicTitles[type]}`}</Box>
            <ProblemDialog type={type} />
          </Box>
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
          backgroundColor: "white",
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
