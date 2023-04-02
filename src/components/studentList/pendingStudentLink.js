import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import "../classPageLayout/classPageLayout.css";
import "../classPageLink/classPageLink.css";
import {
  useUpdatePendingStudent,
  useUpdateConfirmedStudent,
} from "../../queries/classQueries";
import Box from "@mui/system/Box";
import { Button } from "@mui/material";

const PendingStudentLink = ({ name, classId, studentId, refetch }) => {
  const {
    isLoading: isPendingLoading,
    data: pendingData,
    mutateAsync: pendingMutate,
    reset: pendingReset,
  } = useUpdatePendingStudent();
  const {
    isLoading: isConfirmedLoading,
    data: confirmedData,
    mutateAsync: confirmedMutate,
    reset: confirmedReset,
  } = useUpdateConfirmedStudent();

  useEffect(() => {
    if (
      !isPendingLoading &&
      !isConfirmedLoading &&
      pendingData?._id &&
      confirmedData?._id
    ) {
      pendingReset();
      confirmedReset();
      refetch();
    } else if (
      !isPendingLoading &&
      !isConfirmedLoading &&
      pendingData?._id &&
      !confirmedData?._id
    ) {
      pendingReset();
      refetch();
    }
  }, [
    isPendingLoading,
    isConfirmedLoading,
    pendingData,
    confirmedData,
    pendingReset,
    confirmedReset,
    refetch,
  ]);

  const handleDeny = (e) => {
    e.preventDefault();
    if (!isPendingLoading && !pendingData?._id) {
      pendingMutate({ classId, action: "remove", actionId: studentId });
    }
  };

  const handleAccept = (e) => {
    e.preventDefault();
    if (
      !isPendingLoading &&
      !pendingData?._id &&
      !isConfirmedLoading &&
      !confirmedData?._id
    ) {
      pendingMutate({ classId, action: "remove", actionId: studentId });
      confirmedMutate({ classId, action: "add", actionId: studentId });
    }
  };

  return (
    <Grid item xs={12}>
      <Link className="topicLink" to="">
        <div className="container">
          <Box sx={{ padding: "8px" }} className="leftSideClassPageLink">
            {name}
          </Box>
          <span className="rightSideClassPageLink">
            <Button
              color="inherit"
              onClick={handleAccept}
              disabled={isPendingLoading || isConfirmedLoading}
            >
              Accept
            </Button>
            <Button
              color="inherit"
              onClick={handleDeny}
              disabled={isPendingLoading || isConfirmedLoading}
            >
              Deny
            </Button>
          </span>
        </div>
      </Link>
    </Grid>
  );
};

export default PendingStudentLink;

PendingStudentLink.propTypes = {
  name: PropTypes.string,
  classId: PropTypes.string,
  studentId: PropTypes.string,
  refetch: PropTypes.func,
};
