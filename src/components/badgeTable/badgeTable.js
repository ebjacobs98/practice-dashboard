import React from "react";
import { useCurrentUser } from "../../queries/userQueries";
import { Box } from "@mui/system";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import LandscapeIcon from "@mui/icons-material/Landscape";
import Tooltip from "@mui/material/Tooltip";
import {
  TopicTitles,
  TopicsArray,
  BRONZE_SUCCESS,
  BRONZE_FAIL,
  SILVER_SUCCESS,
  SILVER_FAIL,
  GOLD_SUCCESS,
  GOLD_FAIL,
  goldTime,
  silverTime,
  bronzeTime,
  goldLength,
  silverLength,
  bronzeLength,
  bronzeSpeedMessage,
  silverSpeedMessage,
  goldSpeedMessage,
  bronzeLengthMessage,
  silverLengthMessage,
  goldLengthMessage,
} from "../../constants/constants";

const BadgeTable = () => {
  const { data, isLoading } = useCurrentUser();
  if (isLoading) {
    return <></>;
  } else {
    const totalTopics = TopicsArray.length;
    const topics = Object.entries(data.topics).map((entry) => ({
      name: entry[0],
      ...entry[1],
    }));

    const totalQuestionsAnswered = topics.reduce(
      (acc, value) => acc + value.questionsAnswered,
      0
    );

    const totalFastestTimes = topics.reduce(
      (acc, value) => acc + value.fastestTime,
      0
    );

    const totalTopicsAttempted = topics.reduce((acc, value) => {
      if (value.questionsAnswered > 0) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const totalCompleted = topics.reduce((acc, value) => {
      let tempAcc = 0;
      if (value.questionsAnswered >= goldLength) {
        tempAcc += 3;
      } else if (value.questionsAnswered >= silverLength) {
        tempAcc += 2;
      } else if (value.questionsAnswered >= bronzeLength) {
        tempAcc += 1;
      }
      if (value.fastestTime !== 0) {
        if (value.fastestTime < goldTime) {
          tempAcc += 3;
        } else if (value.fastestTime < silverTime) {
          tempAcc += 2;
        } else if (value.fastestTime < bronzeTime) {
          tempAcc += 1;
        }
      }
      return acc + tempAcc;
    }, 0);

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
            display: "flex",
          }}
        >
          <Box sx={{ justifyContent: "left", display: "flex", width: "50%" }}>
            {`Student: ${data.name}`}
          </Box>
          <Box sx={{ justifyContent: "right", display: "flex", width: "50%" }}>
            {`Total Badges Achieved: ${totalCompleted}/${
              (totalTopics + 2) * 3
            }`}
          </Box>
        </Box>
        <TableContainer
          component={Paper}
          sx={{ width: "96%", marginLeft: "2%", marginBottom: "2%" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Badge</TableCell>
                <TableCell>Current Total</TableCell>
                <TableCell align="right">Bronze</TableCell>
                <TableCell align="right">Silver</TableCell>
                <TableCell align="right">Gold</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={`totalSpeed`}>
                <TableCell component="th" scope="row">
                  {`Speed Master: All Categories`}
                </TableCell>
                <TableCell component="th" scope="row">
                  {totalTopicsAttempted === totalTopics
                    ? `${totalFastestTimes / 1000}s`
                    : "Not Eligible: Must Complete Round in All Topics"}
                </TableCell>
                <TableCell align="right">
                  {totalTopicsAttempted === totalTopics &&
                  totalFastestTimes < totalTopics * bronzeTime ? (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Time Requirement: Less than ${
                        (bronzeTime * totalTopics) / 1000
                      }s`}
                    >
                      <ShutterSpeedIcon sx={{ color: BRONZE_SUCCESS }} />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Time Requirement: Less than ${
                        (bronzeTime * totalTopics) / 1000
                      }s`}
                    >
                      <ShutterSpeedIcon sx={{ color: BRONZE_FAIL }} />
                    </Tooltip>
                  )}
                </TableCell>
                <TableCell align="right">
                  {totalTopicsAttempted === totalTopics &&
                  totalFastestTimes < totalTopics * silverTime ? (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Time Requirement: Less than ${
                        (silverTime * totalTopics) / 1000
                      }s`}
                    >
                      <ShutterSpeedIcon sx={{ color: SILVER_SUCCESS }} />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Time Requirement: Less than ${
                        (silverTime * totalTopics) / 1000
                      }s`}
                    >
                      <ShutterSpeedIcon sx={{ color: SILVER_FAIL }} />
                    </Tooltip>
                  )}
                </TableCell>
                <TableCell align="right">
                  {totalTopicsAttempted === totalTopics &&
                  totalFastestTimes < totalTopics * goldTime ? (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Time Requirement: Less than ${
                        (goldTime * totalTopics) / 1000
                      }s`}
                    >
                      <ShutterSpeedIcon sx={{ color: GOLD_SUCCESS }} />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Time Requirement: Less than ${
                        (goldTime * totalTopics) / 1000
                      }s`}
                    >
                      <ShutterSpeedIcon sx={{ color: GOLD_FAIL }} />
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>

              <TableRow key={`totalQuestions`}>
                <TableCell component="th" scope="row">
                  {`Marathon Master: All Categories`}
                </TableCell>
                <TableCell component="th" scope="row">
                  {`${totalQuestionsAnswered} Questions Answered`}
                </TableCell>
                <TableCell align="right">
                  {totalQuestionsAnswered >= totalTopics * bronzeLength ? (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Question Requirement: ${
                        bronzeLength * totalTopics
                      } Questions Answered`}
                    >
                      <LandscapeIcon sx={{ color: BRONZE_SUCCESS }} />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Question Requirement: ${
                        bronzeLength * totalTopics
                      } Questions Answered`}
                    >
                      <LandscapeIcon sx={{ color: BRONZE_FAIL }} />
                    </Tooltip>
                  )}
                </TableCell>
                <TableCell align="right">
                  {totalQuestionsAnswered >= totalTopics * silverLength ? (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Question Requirement: ${
                        silverLength * totalTopics
                      } Questions Answered`}
                    >
                      <LandscapeIcon sx={{ color: SILVER_SUCCESS }} />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Question Requirement: ${
                        silverLength * totalTopics
                      } Questions Answered`}
                    >
                      <LandscapeIcon sx={{ color: SILVER_FAIL }} />
                    </Tooltip>
                  )}
                </TableCell>
                <TableCell align="right">
                  {totalQuestionsAnswered >= totalTopics * goldLength ? (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Question Requirement: ${
                        goldLength * totalTopics
                      } Questions Answered`}
                    >
                      <LandscapeIcon sx={{ color: GOLD_SUCCESS }} />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      arrow
                      placement="top"
                      title={`Question Requirement: ${
                        goldLength * totalTopics
                      } Questions Answered`}
                    >
                      <LandscapeIcon sx={{ color: GOLD_FAIL }} />
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>

              {topics.map((topic) => (
                <>
                  <TableRow key={`speed${topic.name}`}>
                    <TableCell component="th" scope="row">
                      {`Speed Master: ${TopicTitles[topic.name]}`}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {`${topic.fastestTime / 1000}s`}
                    </TableCell>
                    <TableCell align="right">
                      {topic.fastestTime !== 0 &&
                      topic.fastestTime < bronzeTime ? (
                        <Tooltip
                          arrow
                          placement="top"
                          title={bronzeSpeedMessage}
                        >
                          <ShutterSpeedIcon sx={{ color: BRONZE_SUCCESS }} />
                        </Tooltip>
                      ) : (
                        <Tooltip
                          arrow
                          placement="top"
                          title={bronzeSpeedMessage}
                        >
                          <ShutterSpeedIcon sx={{ color: BRONZE_FAIL }} />
                        </Tooltip>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {topic.fastestTime !== 0 &&
                      topic.fastestTime < silverTime ? (
                        <Tooltip
                          arrow
                          placement="top"
                          title={silverSpeedMessage}
                        >
                          <ShutterSpeedIcon sx={{ color: SILVER_SUCCESS }} />
                        </Tooltip>
                      ) : (
                        <Tooltip
                          arrow
                          placement="top"
                          title={silverSpeedMessage}
                        >
                          <ShutterSpeedIcon sx={{ color: SILVER_FAIL }} />
                        </Tooltip>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {topic.fastestTime !== 0 &&
                      topic.fastestTime < goldTime ? (
                        <Tooltip arrow placement="top" title={goldSpeedMessage}>
                          <ShutterSpeedIcon sx={{ color: GOLD_SUCCESS }} />
                        </Tooltip>
                      ) : (
                        <Tooltip arrow placement="top" title={goldSpeedMessage}>
                          <ShutterSpeedIcon sx={{ color: GOLD_FAIL }} />
                        </Tooltip>
                      )}
                    </TableCell>
                  </TableRow>

                  <TableRow key={`length${topic.name}`}>
                    <TableCell component="th" scope="row">
                      {`Marathon Master: ${TopicTitles[topic.name]}`}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {`${topic.questionsAnswered} Questions Answered`}
                    </TableCell>
                    <TableCell align="right">
                      {topic.questionsAnswered >= bronzeLength ? (
                        <Tooltip
                          arrow
                          placement="top"
                          title={bronzeLengthMessage}
                        >
                          <LandscapeIcon sx={{ color: BRONZE_SUCCESS }} />
                        </Tooltip>
                      ) : (
                        <Tooltip
                          arrow
                          placement="top"
                          title={bronzeLengthMessage}
                        >
                          <LandscapeIcon sx={{ color: BRONZE_FAIL }} />
                        </Tooltip>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {topic.questionsAnswered >= silverLength ? (
                        <Tooltip
                          arrow
                          placement="top"
                          title={silverLengthMessage}
                        >
                          <LandscapeIcon sx={{ color: SILVER_SUCCESS }} />
                        </Tooltip>
                      ) : (
                        <Tooltip
                          arrow
                          placement="top"
                          title={silverLengthMessage}
                        >
                          <LandscapeIcon sx={{ color: SILVER_FAIL }} />
                        </Tooltip>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {topic.questionsAnswered >= goldLength ? (
                        <Tooltip
                          arrow
                          placement="top"
                          title={goldLengthMessage}
                        >
                          <LandscapeIcon sx={{ color: GOLD_SUCCESS }} />
                        </Tooltip>
                      ) : (
                        <Tooltip
                          arrow
                          placement="top"
                          title={goldLengthMessage}
                        >
                          <LandscapeIcon sx={{ color: GOLD_FAIL }} />
                        </Tooltip>
                      )}
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
};

export default BadgeTable;
