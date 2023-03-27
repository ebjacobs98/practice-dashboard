import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import "../classPageLayout/classPageLayout.css";
import "./classPageLink.css";
import { useUpdatePendingStudent } from "../../queries/classQueries";
import { useCurrentUser } from "../../queries/userQueries";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";

const PendingStudentClassPageLink = ({ name, classId, refetch }) => {
  const { data: user, isLoading: isUserLoading } = useCurrentUser();
  const { isLoading, data, mutateAsync, reset } = useUpdatePendingStudent();

  useEffect(() => {
    if (!isLoading && data?._id) {
      refetch();
      reset();
    }
  }, [isLoading, data, reset, refetch]);

  const handleDelete = () => {
    if (!isLoading && !data?._id && !isUserLoading) {
      mutateAsync({ classId, action: "remove", actionId: user.id });
    }
  };

  return (
    <Grid item xs={6}>
      <Link className="topicLink" to="/classes">
        <div className="container">
          <Box sx={{ padding: "8px" }} className="leftSideClassPageLink">
            {name}
          </Box>
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

export default PendingStudentClassPageLink;

PendingStudentClassPageLink.propTypes = {
  name: PropTypes.string,
  classId: PropTypes.string,
  refetch: PropTypes.func,
};
