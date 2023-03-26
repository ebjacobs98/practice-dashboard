import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import "../classPageLayout/classPageLayout.css";
import { useDeleteClass } from "../../queries/classQueries";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ClassPageLink = ({ name, classId, refetch }) => {
  const { isLoading, data, mutateAsync, reset } = useDeleteClass();

  useEffect(() => {
    if (!isLoading && data?._id) {
      refetch();
      reset();
    }
  }, [isLoading, data, reset, refetch]);

  const handleDelete = () => {
    if (!isLoading && !data?._id) {
      mutateAsync({ classId });
    }
  };
  return (
    <Grid item xs={6}>
      <Link className="topicLink" to="/classes">
        <span>
          {name}
          <DeleteForeverIcon onClick={handleDelete} />
        </span>
      </Link>
    </Grid>
  );
};

export default ClassPageLink;

ClassPageLink.propTypes = {
  name: PropTypes.string,
  classId: PropTypes.string,
  refetch: PropTypes.func,
};
