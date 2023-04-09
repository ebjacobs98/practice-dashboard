import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import { TopicTitles } from "../../constants/constants";
import "../topics/topics.css";
import { COLORS } from "../../constants/constants";
import { useUpdateAssignedTopics, useClass } from "../../queries/classQueries";

const TeacherTopicLink = ({ classId, topic }) => {
  const {
    isLoading: isClassLoading,
    data: classData,
    refetch,
  } = useClass({ classId });
  const { isLoading, data, mutateAsync, reset } = useUpdateAssignedTopics({
    classId,
    topic,
  });

  useEffect(() => {
    if (!isLoading && data?._id) {
      refetch();
      reset();
    }
  }, [isLoading, data, reset, refetch]);

  if (isClassLoading) {
    return <></>;
  }
  const isAssigned =
    classData?.teacherClasses?.[0]?.assignedTopics?.includes(topic);

  const handleUnassign = (e) => {
    e.preventDefault();
    if (!isLoading && !data?._id) {
      mutateAsync({ action: "remove" });
    }
  };

  const handleAssign = (e) => {
    e.preventDefault();
    if (!isLoading && !data?._id) {
      mutateAsync({ action: "add" });
    }
  };

  return (
    <Grid item xs={3}>
      <Link
        style={{
          backgroundColor: isAssigned ? COLORS.NAVY_BLUE : COLORS.MEDIUM_BLUE,
        }}
        className="topicLink"
        to={topic}
      >
        <Box
          sx={{
            margin: "8px",
            display: "flex",
            fontSize: "18px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ marginBottom: "8px" }}>{TopicTitles[topic]}</Box>
          <Button
            color="inherit"
            onClick={isAssigned ? handleUnassign : handleAssign}
            disabled={isLoading}
            sx={{ width: "50%", marginLeft: "25%" }}
          >
            {isAssigned ? "Unassign Topic" : "Assign Topic"}
          </Button>
        </Box>
      </Link>
    </Grid>
  );
};

export default TeacherTopicLink;

TeacherTopicLink.propTypes = {
  classId: PropTypes.string,
  topic: PropTypes.string,
};
