import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import LandscapeIcon from "@mui/icons-material/Landscape";
import Tooltip from "@mui/material/Tooltip";
import {
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
} from "../../../constants/constants";

const BadgeRows = ({ topic }) => {
  return (
    <Box sx={{ display: "flex", fontSize: "24px", marginLeft: "8px" }}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        Badges:
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginLeft: "8px" }}>
          {topic.fastestTime !== 0 && topic.fastestTime < bronzeTime ? (
            <Tooltip arrow placement="top" title={bronzeSpeedMessage}>
              <ShutterSpeedIcon
                fontSize="large"
                sx={{ color: BRONZE_SUCCESS, marginRight: "16px" }}
              />
            </Tooltip>
          ) : (
            <Tooltip arrow placement="top" title={bronzeSpeedMessage}>
              <ShutterSpeedIcon
                fontSize="large"
                sx={{ color: BRONZE_FAIL, marginRight: "16px" }}
              />
            </Tooltip>
          )}
          {topic.fastestTime !== 0 && topic.fastestTime < silverTime ? (
            <Tooltip arrow placement="top" title={silverSpeedMessage}>
              <ShutterSpeedIcon
                fontSize="large"
                sx={{ color: SILVER_SUCCESS, marginRight: "16px" }}
              />
            </Tooltip>
          ) : (
            <Tooltip arrow placement="top" title={silverSpeedMessage}>
              <ShutterSpeedIcon
                fontSize="large"
                sx={{ color: SILVER_FAIL, marginRight: "16px" }}
              />
            </Tooltip>
          )}
          {topic.fastestTime !== 0 && topic.fastestTime < goldTime ? (
            <Tooltip arrow placement="top" title={goldSpeedMessage}>
              <ShutterSpeedIcon
                fontSize="large"
                sx={{ color: GOLD_SUCCESS, marginRight: "16px" }}
              />
            </Tooltip>
          ) : (
            <Tooltip arrow placement="top" title={goldSpeedMessage}>
              <ShutterSpeedIcon
                fontSize="large"
                sx={{ color: GOLD_FAIL, marginRight: "16px" }}
              />
            </Tooltip>
          )}
        </Box>
        <Box sx={{ margin: "8px" }}>
          {topic.questionsAnswered >= bronzeLength ? (
            <Tooltip arrow placement="top" title={bronzeLengthMessage}>
              <LandscapeIcon
                fontSize="large"
                sx={{ color: BRONZE_SUCCESS, marginRight: "16px" }}
              />
            </Tooltip>
          ) : (
            <Tooltip arrow placement="top" title={bronzeLengthMessage}>
              <LandscapeIcon
                fontSize="large"
                sx={{ color: BRONZE_FAIL, marginRight: "16px" }}
              />
            </Tooltip>
          )}
          {topic.questionsAnswered >= silverLength ? (
            <Tooltip arrow placement="top" title={silverLengthMessage}>
              <LandscapeIcon
                fontSize="large"
                sx={{ color: SILVER_SUCCESS, marginRight: "16px" }}
              />
            </Tooltip>
          ) : (
            <Tooltip arrow placement="top" title={silverLengthMessage}>
              <LandscapeIcon
                fontSize="large"
                sx={{ color: SILVER_FAIL, marginRight: "16px" }}
              />
            </Tooltip>
          )}
          {topic.questionsAnswered >= goldLength ? (
            <Tooltip arrow placement="top" title={goldLengthMessage}>
              <LandscapeIcon
                fontSize="large"
                sx={{ color: GOLD_SUCCESS, marginRight: "16px" }}
              />
            </Tooltip>
          ) : (
            <Tooltip arrow placement="top" title={goldLengthMessage}>
              <LandscapeIcon
                fontSize="large"
                sx={{ color: GOLD_FAIL, marginRight: "16px" }}
              />
            </Tooltip>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BadgeRows;

BadgeRows.propTypes = {
  topic: PropTypes.object,
};
