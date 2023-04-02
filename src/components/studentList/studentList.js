import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import "../topics/topics.css";
import { useClass } from "../../queries/classQueries";
import CurrentStudentList from "./currentStudentList";
import PendingStudentList from "./pendingStudentList";

const StudentList = ({ classId }) => {
  const { data, isLoading, refetch } = useClass({ classId });
  const [currentUsers, setCurrentUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  useEffect(() => {
    if (
      data?.teacherClasses?.[0]?.students &&
      data?.teacherClasses?.[0]?.students !== currentUsers
    ) {
      setCurrentUsers(data?.teacherClasses?.[0]?.students);
    }
    if (
      data?.teacherClasses?.[0]?.pendingStudents &&
      data?.teacherClasses?.[0]?.pendingStudents !== pendingUsers
    ) {
      setPendingUsers(data?.teacherClasses?.[0]?.pendingStudents);
    }
  }, [currentUsers, pendingUsers, data]);
  if (isLoading) {
    return <></>;
  } else {
    return (
      <Grid sx={{ padding: "8px" }} container spacing={2}>
        <Grid item xs={12}>
          Current Students
        </Grid>
        <CurrentStudentList
          userIds={currentUsers}
          classId={classId}
          refetch={refetch}
        />
        <Grid item xs={12}>
          Pending Students
        </Grid>
        <PendingStudentList
          userIds={pendingUsers}
          classId={classId}
          refetch={refetch}
        />
      </Grid>
    );
  }
};

export default StudentList;

StudentList.propTypes = {
  classId: PropTypes.string,
};
