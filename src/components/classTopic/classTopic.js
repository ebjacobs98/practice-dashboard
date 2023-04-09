import React from "react";
import PropTypes from "prop-types";
import { useUsers } from "../../queries/userQueries";
import { useClass } from "../../queries/classQueries";
import { Box } from "@mui/system";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TopicTitles } from "../../constants/constants";
import MetricsGraph from "../metricsGraph/metricsGraph";

const ClassTopic = ({ classId, topic }) => {
  const { data: classData, isLoading: classIsLoading } = useClass({ classId });
  const { data, isLoading } = useUsers({
    userIds: classData.teacherClasses[0].students,
  });
  if (isLoading || classIsLoading) {
    return <></>;
  } else {
    return (
      <>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "white",
            color: "black",
            marginLeft: "23%",
            marginBottom: "8px",
            padding: "2%",
          }}
        >
          Topic: {TopicTitles[topic]}
        </Box>
        <TableContainer
          component={Paper}
          sx={{ width: "96%", marginLeft: "2%", marginBottom: "2%" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student</TableCell>
                <TableCell align="right">Questions Answered</TableCell>
                <TableCell align="right">Fastest Time</TableCell>
                <TableCell align="right" width={"40%"}>
                  Progression
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((student) => (
                <TableRow key={student.name}>
                  <TableCell component="th" scope="row">
                    {student.name}
                  </TableCell>
                  <TableCell align="right">
                    {student.topics[topic].questionsAnswered}
                  </TableCell>
                  <TableCell align="right">{`${
                    student.topics[topic].fastestTime / 1000
                  }s`}</TableCell>
                  <TableCell align="right">
                    {student.topics[topic].metrics.length === 0 ? (
                      "NA"
                    ) : (
                      <MetricsGraph metrics={student.topics[topic].metrics} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
};

export default ClassTopic;

ClassTopic.propTypes = {
  classId: PropTypes.string,
  topic: PropTypes.string,
};
