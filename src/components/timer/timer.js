import React, { useEffect } from "react";
import Box from "@mui/material/Box";

const Timer = ({ isRunning, time, setTime }) => {
  useEffect(() => {
    let timeInterval = null;

    if (isRunning) {
      timeInterval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(timeInterval);
    }
    return () => {
      clearInterval(timeInterval);
    };
  }, [isRunning, setTime]);

  const minutes = Math.floor(time / (1000 * 60));
  const seconds = Math.floor((time - minutes * 1000 * 60) / 1000);
  const subSeconds = Math.floor(
    (time - minutes * 1000 * 60 - seconds * 1000) / 10
  );

  const shownSeconds = seconds > 9 ? seconds : "0" + seconds;
  const shownSubSeconds = subSeconds > 9 ? subSeconds : "0" + subSeconds;

  return (
    <Box
      sx={{
        fontSize: "40px",
        width: "100%",
        textAlign: "center",
        marginBottom: "16px",
      }}
    >
      {minutes + ":" + shownSeconds + ":" + shownSubSeconds}
    </Box>
  );
};

export default Timer;
