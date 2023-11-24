import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { TopicsArray, TopicTitles } from "../../../constants/constants";
import "./topics.css";
import { COLORS } from "../../../constants/constants";
import { useCurrentUser } from "../../../queries/userQueries";
import { useClasses } from "../../../queries/classQueries";

const Topics = () => {
  const { data, isLoading } = useCurrentUser();
  const { data: classesData, isLoading: classesIsLoading } = useClasses();

  if (isLoading || !data || classesIsLoading) {
    return (
      <Grid sx={{ padding: "8px" }} container spacing={2}>
        {TopicsArray.map((entry) => (
          <Grid item xs={3}>
            <Link
              style={{ backgroundColor: COLORS.MEDIUM_BLUE }}
              className="topicLink"
              to={`/practiceApp/${entry}`}
            >
              {TopicTitles[entry]}
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }

  const assignedTopics = classesData?.studentConfirmedClasses
    ? classesData?.studentConfirmedClasses?.reduce((acc, value) => {
        return [...acc, ...value?.assignedTopics];
      }, [])
    : [];

  return (
    <Grid sx={{ padding: "8px" }} container spacing={2}>
      {TopicsArray.map((entry) => (
        <Grid item xs={3}>
          <Link
            style={{
              backgroundColor: assignedTopics.includes(entry)
                ? COLORS.NAVY_BLUE
                : COLORS.MEDIUM_BLUE,
            }}
            className="topicLink"
            to={`/practiceApp/${entry}`}
          >
            {TopicTitles[entry]}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Topics;
