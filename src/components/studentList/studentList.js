import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import "../topics/topics.css";
import { useClass } from "../../queries/classQueries";

const StudentList = ({ classId }) => {
  const { data, isLoading } = useClass({ classId });
  if (isLoading) {
    return <></>;
  } else {
    return (
      <Grid sx={{ padding: "8px" }} container spacing={2}>
        <Grid item xs={12}>
          Current Students
        </Grid>
        {data?.teacherClasses?.[0]?.students.map((student) => (
          <Grid item xs={6}>
            <Link className="topicLink" to={student}>
              {student}
            </Link>
          </Grid>
        ))}
        <Grid item xs={12}>
          Pending Students
        </Grid>
        {data?.teacherClasses?.[0]?.pendingStudents.map((student) => (
          <Grid item xs={6}>
            <Link className="topicLink" to={student}>
              {student}
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default StudentList;

StudentList.propTypes = {
  classId: PropTypes.string,
};
