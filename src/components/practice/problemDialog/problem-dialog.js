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
import getRandomQuestion from "../../../questionGeneration/question-generation";
import { useTopicMetrics } from "../../../queries/userQueries";
import { COLORS } from "../../../constants/constants";

const ProblemDialog = ({ type }) => {
  const navigate = useNavigate();
  const { isLoading, mutateAsync } = useTopicMetrics();
  const answerField = useRef();
  const [open, setOpen] = useState(false);
  const [isRefSet, setIsRefSet] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [time, setTime] = useState(0);
  const [response, setResponse] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");
  const [qAndA, setQAndA] = useState({ question: null, answer: null });
  const [answerError, setAnswerError] = useState(false);
  const [answerError2, setAnswerError2] = useState(false);
  const [answerError3, setAnswerError3] = useState(false);

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
    setResponse2("");
    setResponse3("");
    setAnswerError(false);
    setAnswerError2(false);
    setAnswerError3(false);
    setTime(0);
    if (questionNumber === 4) {
      setQuestionNumber(1);
      navigate(0);
    }
    setQuestionNumber(1);
  };

  const handleEnter = () => {
    if (qAndA.answers.length === 1) {
      if (
        parseFloat(response) >=
          qAndA.answers[0].answer - qAndA.answers[0].error &&
        parseFloat(response) <= qAndA.answers[0].answer + qAndA.answers[0].error
      ) {
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
    } else if (qAndA.answers.length === 2) {
      if (
        (response === qAndA.answers[0].answer ||
          (parseFloat(response) >=
            qAndA.answers[0].answer - qAndA.answers[0].error &&
            parseFloat(response) <=
              qAndA.answers[0].answer + qAndA.answers[0].error)) &&
        (response2 === qAndA.answers[1].answer ||
          (parseFloat(response2) >=
            qAndA.answers[1].answer - qAndA.answers[1].error &&
            parseFloat(response2) <=
              qAndA.answers[1].answer + qAndA.answers[1].error))
      ) {
        if (questionNumber === 3) {
          mutateAsync({ type: type, score: time });
        }
        setAnswerError(false);
        setAnswerError2(false);
        setResponse("");
        setResponse2("");
        setQAndA(getRandomQuestion({ type }));
        setQuestionNumber(questionNumber + 1);
        answerField.current.focus();
      } else {
        if (
          !(
            response === qAndA.answers[0].answer ||
            (parseFloat(response) >=
              qAndA.answers[0].answer - qAndA.answers[0].error &&
              parseFloat(response) <=
                qAndA.answers[0].answer + qAndA.answers[0].error)
          )
        ) {
          setAnswerError(true);
        } else {
          setAnswerError(false);
        }
        if (
          !(
            response2 === qAndA.answers[1].answer ||
            (parseFloat(response2) >=
              qAndA.answers[1].answer - qAndA.answers[1].error &&
              parseFloat(response2) <=
                qAndA.answers[1].answer + qAndA.answers[1].error)
          )
        ) {
          setAnswerError2(true);
        } else {
          setAnswerError2(false);
        }
      }
    } else if (qAndA.answers.length === 3) {
      if (
        (response === qAndA.answers[0].answer ||
          (parseFloat(response) >=
            qAndA.answers[0].answer - qAndA.answers[0].error &&
            parseFloat(response) <=
              qAndA.answers[0].answer + qAndA.answers[0].error)) &&
        (response2 === qAndA.answers[1].answer ||
          (parseFloat(response2) >=
            qAndA.answers[1].answer - qAndA.answers[1].error &&
            parseFloat(response2) <=
              qAndA.answers[1].answer + qAndA.answers[1].error)) &&
        (response3 === qAndA.answers[2].answer ||
          (parseFloat(response3) >=
            qAndA.answers[2].answer - qAndA.answers[2].error &&
            parseFloat(response3) <=
              qAndA.answers[2].answer + qAndA.answers[2].error))
      ) {
        if (questionNumber === 3) {
          mutateAsync({ type: type, score: time });
        }
        setAnswerError(false);
        setAnswerError2(false);
        setAnswerError3(false);
        setResponse("");
        setResponse2("");
        setResponse3("");
        setQAndA(getRandomQuestion({ type }));
        setQuestionNumber(questionNumber + 1);
        answerField.current.focus();
      } else {
        if (
          !(
            response === qAndA.answers[0].answer ||
            (parseFloat(response) >=
              qAndA.answers[0].answer - qAndA.answers[0].error &&
              parseFloat(response) <=
                qAndA.answers[0].answer + qAndA.answers[0].error)
          )
        ) {
          setAnswerError(true);
        } else {
          setAnswerError(false);
        }
        if (
          !(
            response2 === qAndA.answers[1].answer ||
            (parseFloat(response2) >=
              qAndA.answers[1].answer - qAndA.answers[1].error &&
              parseFloat(response2) <=
                qAndA.answers[1].answer + qAndA.answers[1].error)
          )
        ) {
          setAnswerError2(true);
        } else {
          setAnswerError2(false);
        }
        if (
          !(
            response3 === qAndA.answers[2].answer ||
            (parseFloat(response3) >=
              qAndA.answers[2].answer - qAndA.answers[2].error &&
              parseFloat(response3) <=
                qAndA.answers[2].answer + qAndA.answers[2].error)
          )
        ) {
          setAnswerError3(true);
        } else {
          setAnswerError3(false);
        }
      }
    }
  };

  const openDialog = () => {
    setQAndA(getRandomQuestion({ type }));
    setOpen(true);
  };

  const onAnswerChange = (e) => {
    setResponse(e.target.value);
  };

  const onAnswerChange2 = (e) => {
    setResponse2(e.target.value);
  };

  const onAnswerChange3 = (e) => {
    setResponse3(e.target.value);
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

  const answerHelperText2 = answerError2
    ? "Sorry wrong answer, try again!"
    : null;

  const answerHelperText3 = answerError3
    ? "Sorry wrong answer, try again!"
    : null;

  return (
    <>
      <Button
        sx={{
          fontSize: "24px",
          backgroundColor: COLORS.MEDIUM_BLUE,
          color: "white",
          "&:hover": {
            backgroundColor: COLORS.MEDIUM_BLUE,
            opacity: 0.9,
          },
        }}
        onClick={openDialog}
      >
        Start Round
      </Button>

      <Dialog open={open} maxWidth="md">
        <DialogTitle sx={{ textAlign: "center" }}>{dialogTitle}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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
              {qAndA.answers.length >= 1 && (
                <TextField
                  inputRef={answerField}
                  type="number"
                  id="answer"
                  value={response}
                  onChange={onAnswerChange}
                  onKeyDown={handleEnterKey}
                  error={answerError}
                  helperText={answerHelperText}
                  label={qAndA.answers[0].answerLabel}
                  sx={{
                    marginTop: "16px",
                  }}
                />
              )}
              {qAndA.answers.length >= 2 && (
                <TextField
                  type="number"
                  id="answer2"
                  value={response2}
                  onChange={onAnswerChange2}
                  onKeyDown={handleEnterKey}
                  error={answerError2}
                  helperText={answerHelperText2}
                  label={qAndA.answers[1].answerLabel}
                  sx={{
                    marginTop: "16px",
                  }}
                />
              )}
              {qAndA.answers.length >= 3 && (
                <TextField
                  type="number"
                  id="answer3"
                  value={response3}
                  onChange={onAnswerChange3}
                  onKeyDown={handleEnterKey}
                  error={answerError3}
                  helperText={answerHelperText3}
                  label={qAndA.answers[2].answerLabel}
                  sx={{
                    marginTop: "16px",
                  }}
                />
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          {!areQuestionsDone && (
            <Button sx={{ color: COLORS.MEDIUM_BLUE }} onClick={handleEnter}>
              Enter
            </Button>
          )}
          <Button
            sx={{ color: COLORS.MEDIUM_BLUE }}
            onClick={handleClose}
            disabled={isLoading}
          >
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
