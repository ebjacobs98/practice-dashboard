import React from "react";
import PropTypes from "prop-types";
import { useUsers } from "../../queries/userQueries";
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

const StudentData = ({ studentId }) => {
  const { data, isLoading } = useUsers({ userIds: [studentId] });
  if (isLoading) {
    return <></>;
  } else {
    const topics = Object.entries(data[0].topics).map((entry) => ({
      name: entry[0],
      ...entry[1],
    }));

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
          Student: {data[0].name}
        </Box>
        <TableContainer
          component={Paper}
          sx={{ width: "96%", marginLeft: "2%", marginBottom: "2%" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Topic</TableCell>
                <TableCell align="right">Questions Answered</TableCell>
                <TableCell align="right">Fastest Time</TableCell>
                <TableCell align="right" width={"40%"}>
                  Progression
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topics.map((topic) => (
                <TableRow key={topic.name}>
                  <TableCell component="th" scope="row">
                    {TopicTitles[topic.name]}
                  </TableCell>
                  <TableCell align="right">{topic.questionsAnswered}</TableCell>
                  <TableCell align="right">{`${
                    topic.fastestTime / 1000
                  }s`}</TableCell>
                  <TableCell align="right">
                    {topic.metrics.length === 0 ? (
                      "NA"
                    ) : (
                      <MetricsGraph metrics={topic.metrics} />
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

export default StudentData;

StudentData.propTypes = {
  studentId: PropTypes.string,
};
