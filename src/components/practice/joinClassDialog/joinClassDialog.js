import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useUpdatePendingStudent } from "../../../queries/classQueries";
import { useCurrentUser } from "../../../queries/userQueries";
import { COLORS } from "../../../constants/constants";

const JoinClassDialog = ({ open, setOpen, refetch }) => {
  const { data: user, isLoading: isUserLoading } = useCurrentUser();
  const [joinCode, setJoinCode] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { mutateAsync, isLoading, data, reset } = useUpdatePendingStudent();

  const handleClose = useCallback(() => {
    reset();
    setOpen(false);
    setJoinCode("");
    setErrorText("");
    setInputError(false);
  }, [setJoinCode, setErrorText, setInputError, setOpen, reset]);

  useEffect(() => {
    if (!isLoading && data?._id && open) {
      refetch();
      handleClose();
    } else if (!isLoading && open && data) {
      setInputError(true);
      setErrorText(data);
    }
  }, [isLoading, data, open, handleClose, reset, refetch]);

  const onTextChange = (e) => {
    setJoinCode(e.target.value);
    if (joinCode.length > 0) {
      setInputError(false);
      setErrorText("");
    }
  };

  const handleEnter = () => {
    if (joinCode.length > 0 && !isUserLoading) {
      mutateAsync({
        classId: joinCode,
        action: "add",
        actionId: user.id,
      });
    } else {
      setInputError(true);
      setErrorText("Must enter a join code");
    }
  };

  const shownErrorText = typeof errorText === "string" ? errorText : "";

  return (
    <Dialog open={open}>
      <DialogTitle sx={{ textAlign: "center" }}>Join a New Class</DialogTitle>
      <DialogContent>
        <TextField
          sx={{
            margin: "8px",
          }}
          required
          label="Join Code"
          id="code"
          value={joinCode}
          onChange={onTextChange}
          disabled={isLoading}
          error={inputError}
          helperText={shownErrorText}
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: COLORS.MEDIUM_BLUE }} onClick={handleEnter}>
          Join Class
        </Button>
        <Button
          sx={{ color: COLORS.MEDIUM_BLUE }}
          onClick={handleClose}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JoinClassDialog;

JoinClassDialog.propTypes = {
  open: PropTypes.bool,
  refetch: PropTypes.func,
  setOpen: PropTypes.func,
};
