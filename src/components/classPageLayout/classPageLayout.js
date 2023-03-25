import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddClassDialog from "../addClassDialog/addClassDialog";
import "./classPageLayout.css";
import { useClasses } from "../../queries/classQueries";
import ClassPageLink from "../classPageLink/classPageLink";

const ClassPageLayout = () => {
  const { data, isLoading, refetch } = useClasses();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  if (isLoading) {
    return <></>;
  } else if (!data) {
    return <>Error Fetching Data</>;
  } else {
    return (
      <>
        <Grid sx={{ padding: "8px" }} container spacing={2}>
          <Grid item xs={12}>
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
          {data.teacherClasses.map((entry) => (
            <ClassPageLink
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
      </>
    );
  }
};

export default ClassPageLayout;
