import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { TopicsArray, TopicTitles } from "../../constants/constants";
import "./topics.css";

const Topics = () => {
  return (
    <Grid sx={{ padding: "8px" }} container spacing={2}>
      {TopicsArray.map((entry) => (
        <Grid item xs={3}>
          <Link className="topicLink" to={entry}>
            {TopicTitles[entry]}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Topics;
