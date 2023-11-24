import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import "../classPageLayout/classPageLayout.css";
import "./classPageLink.css";
import { useUpdatePendingStudent } from "../../../queries/classQueries";
import { useCurrentUser } from "../../../queries/userQueries";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";
import { COLORS } from "../../../constants/constants";

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
      <Box
        style={{
          backgroundColor: COLORS.MEDIUM_BLUE,
          minHeight: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textDecoration: "none",
          color: "white",
          width: "100%",
        }}
      >
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
      </Box>
    </Grid>
  );
};

export default PendingStudentClassPageLink;

PendingStudentClassPageLink.propTypes = {
  name: PropTypes.string,
  classId: PropTypes.string,
  refetch: PropTypes.func,
};
