import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddClassDialog from "../addClassDialog/addClassDialog";
import JoinClassDialog from "../joinClassDialog/joinClassDialog";
import "./classPageLayout.css";
import { useClasses } from "../../queries/classQueries";
import TeacherClassPageLink from "../classPageLink/teacherClassPageLink";
import PendingStudentClassPageLink from "../classPageLink/pendingStudentClassPageLink";
import ConfirmedStudentClassPageLink from "../classPageLink/confirmedStudentClassPageLink";

const ClassPageLayout = () => {
  const { data, isLoading, refetch } = useClasses();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);

  if (isLoading) {
    return <></>;
  } else if (!data) {
    return <>Error Fetching Data</>;
  } else {
    return (
      <>
        <Grid sx={{ padding: "8px" }} container spacing={2}>
          <Grid item xs={6}>
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              onClick={() => {
                setIsAddDialogOpen(true);
              }}
            >
              Add Class
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              onClick={() => {
                setIsJoinDialogOpen(true);
              }}
            >
              Join Class
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ fontSize: "20px" }}>
            Teacher Courses
          </Grid>
          {data.teacherClasses.map((entry) => (
            <TeacherClassPageLink
              name={entry.name}
              classId={entry._id}
              refetch={refetch}
              numStudents={entry?.students?.length}
            />
          ))}
          <Grid item xs={12} sx={{ fontSize: "20px" }}>
            Pending Courses
          </Grid>
          {data.studentPendingClasses.map((entry) => (
            <PendingStudentClassPageLink
              name={entry.name}
              classId={entry._id}
              refetch={refetch}
            />
          ))}
          <Grid item xs={12} sx={{ fontSize: "20px" }}>
            Confirmed Courses
          </Grid>
          {data.studentConfirmedClasses.map((entry) => (
            <ConfirmedStudentClassPageLink
              name={entry.name}
              classId={entry._id}
              refetch={refetch}
            />
          ))}
        </Grid>
        <AddClassDialog
          open={isAddDialogOpen}
          setOpen={setIsAddDialogOpen}
          refetch={refetch}
        />
        <JoinClassDialog
          open={isJoinDialogOpen}
          setOpen={setIsJoinDialogOpen}
          refetch={refetch}
        />
      </>
    );
  }
};

export default ClassPageLayout;
