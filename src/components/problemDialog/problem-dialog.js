import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Timer from "../timer/timer";
import getRandomQuestion from "../../questionGeneration/question-generation";
import { useTopicMetrics } from "../../queries/userQueries";

const ProblemDialog = ({ type }) => {
  const navigate = useNavigate();
  const { isLoading, mutateAsync } = useTopicMetrics();
  const answerField = useRef();
  const [open, setOpen] = useState(false);
  const [isRefSet, setIsRefSet] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [time, setTime] = useState(0);
  const [response, setResponse] = useState();
  const [qAndA, setQAndA] = useState({ question: null, answer: null });
  const [answerError, setAnswerError] = useState(false);

  useEffect(() => {
    if (isRefSet) {
      answerField.current.focus();
    }
    if (open) {
      setIsRefSet(true);
    }
  }, [open, isRefSet]);

  const handleClose = () => {
    setOpen(false);
    setIsRefSet(false);

    setResponse("");
    setAnswerError(false);
    setTime(0);
    if (questionNumber === 4) {
      setQuestionNumber(1);
      navigate(0);
    }
    setQuestionNumber(1);
  };

  const handleEnter = () => {
    if (parseFloat(response) === qAndA.answer) {
      if (questionNumber === 3) {
        mutateAsync({ type: type, score: time });
      }
      setAnswerError(false);
      setResponse("");
      setQAndA(getRandomQuestion({ type }));
      setQuestionNumber(questionNumber + 1);
      answerField.current.focus();
    } else {
      setAnswerError(true);
    }
  };

  const openDialog = () => {
    setQAndA(getRandomQuestion({ type }));
    setOpen(true);
  };

  const onAnswerChange = (e) => {
    setResponse(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleEnter();
    }
  };

  const areQuestionsDone = questionNumber === 4;
  const giveUpText = areQuestionsDone ? "Exit" : "Give Up";
  const dialogTitle = areQuestionsDone
    ? "Congratulations"
    : "Question number " + questionNumber;
  const answerHelperText = answerError
    ? "Sorry wrong answer, try again!"
    : null;

  return (
    <>
      <Button
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "white",
            opacity: 0.9,
          },
        }}
        onClick={openDialog}
      >
        Start Round
      </Button>

      <Dialog open={open}>
        <DialogTitle sx={{ textAlign: "center" }}>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Timer
            isRunning={open && !areQuestionsDone}
            time={time}
            setTime={setTime}
          />
          {qAndA.question && !areQuestionsDone && (
            <>
              {qAndA.question.map((line) => (
                <DialogContentText
                  sx={{ textAlign: "center", color: "black", fontSize: "20px" }}
                >
                  {line}
                </DialogContentText>
              ))}
              <TextField
                inputRef={answerField}
                type="number"
                id="answer"
                value={response}
                onChange={onAnswerChange}
                onKeyDown={handleEnterKey}
                error={answerError}
                helperText={answerHelperText}
                sx={{
                  marginTop: "16px",
                }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          {!areQuestionsDone && <Button onClick={handleEnter}>Enter</Button>}
          <Button onClick={handleClose} disabled={isLoading}>
            {giveUpText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProblemDialog;

ProblemDialog.propTypes = {
  type: PropTypes.string,
};
