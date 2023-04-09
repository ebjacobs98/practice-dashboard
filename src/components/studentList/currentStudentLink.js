import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import "../classPageLayout/classPageLayout.css";
import "../classPageLink/classPageLink.css";
import { useUpdateConfirmedStudent } from "../../queries/classQueries";
import Box from "@mui/system/Box";
import { Button } from "@mui/material";
import { COLORS } from "../../constants/constants";

const CurrentStudentLink = ({ name, classId, studentId, refetch }) => {
  const {
    isLoading: isConfirmedLoading,
    data: confirmedData,
    mutateAsync: confirmedMutate,
    reset: confirmedReset,
  } = useUpdateConfirmedStudent();

  useEffect(() => {
    if (!isConfirmedLoading && confirmedData?._id) {
      confirmedReset();
      refetch();
    }
  }, [isConfirmedLoading, confirmedData, confirmedReset, refetch]);

  const handleRemove = (e) => {
    e.preventDefault();
    if (!isConfirmedLoading && !confirmedData?._id) {
      confirmedMutate({ classId, action: "remove", actionId: studentId });
    }
  };

  return (
    <Grid item xs={12}>
      <Link
        style={{ backgroundColor: COLORS.MEDIUM_BLUE }}
        className="topicLink"
        to={`student/${studentId}`}
      >
        <div className="container">
          <Box sx={{ padding: "8px" }} className="leftSideClassPageLink">
            {name}
          </Box>
          <span className="rightSideClassPageLink">
            <Button
              color="inherit"
              onClick={handleRemove}
              disabled={isConfirmedLoading}
            >
              Remove
            </Button>
          </span>
        </div>
      </Link>
    </Grid>
  );
};

export default CurrentStudentLink;

CurrentStudentLink.propTypes = {
  name: PropTypes.string,
  classId: PropTypes.string,
  studentId: PropTypes.string,
  refetch: PropTypes.func,
};
