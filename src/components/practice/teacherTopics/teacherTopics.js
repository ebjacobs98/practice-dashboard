import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { TopicsArray } from "../../../constants/constants";
import "../topics/topics.css";
import TeacherTopicLink from "../teacherTopicLink/teacherTopicLink";

const TeacherTopics = ({ classId }) => {
  return (
    <Grid sx={{ padding: "8px" }} container spacing={2}>
      {TopicsArray.map((entry) => (
        <TeacherTopicLink classId={classId} topic={entry} />
      ))}
    </Grid>
  );
};

export default TeacherTopics;

TeacherTopics.propTypes = {
  classId: PropTypes.string,
};
