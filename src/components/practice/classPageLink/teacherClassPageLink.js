import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../classPageLayout/classPageLayout.css";
import "./classPageLink.css";
import { useDeleteClass } from "../../../queries/classQueries";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import { COLORS } from "../../../constants/constants";

const TeacherClassPageLink = ({ name, classId, refetch, numStudents }) => {
  const { isLoading, data, mutateAsync, reset } = useDeleteClass();

  useEffect(() => {
    if (!isLoading && data?._id) {
      refetch();
      reset();
    }
  }, [isLoading, data, reset, refetch]);

  const handleDelete = (e) => {
    e.preventDefault();
    if (!isLoading && !data?._id) {
      mutateAsync({ classId });
    }
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(classId);
  };

  return (
    <Grid item xs={6}>
      <Link
        style={{ backgroundColor: COLORS.MEDIUM_BLUE }}
        className="topicLink"
        to={`/practiceApp/teacher/class/${classId}`}
      >
        <div className="container">
          <div className="leftSideClassPageLink">
            <Box sx={{ marginBottom: "8px" }}>{name}</Box>
            <Box>Number of Students: {numStudents}</Box>
            <Box>
              Join Code: {classId}
              <IconButton color="inherit" onClick={handleCopy}>
                <ContentCopyIcon color="white" />
              </IconButton>
            </Box>
          </div>
          <span className="rightSideClassPageLink">
            <IconButton color="inherit" onClick={handleDelete}>
              <DeleteForeverIcon color="white" />
            </IconButton>
          </span>
        </div>
      </Link>
    </Grid>
  );
};

export default TeacherClassPageLink;

TeacherClassPageLink.propTypes = {
  name: PropTypes.string,
  classId: PropTypes.string,
  refetch: PropTypes.func,
  numStudents: PropTypes.number,
};
