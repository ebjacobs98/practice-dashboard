import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCreateClass } from "../../queries/classQueries";
import { COLORS } from "../../constants/constants";

const AddClassDialog = ({ open, setOpen, refetch }) => {
  const [className, setClassName] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { mutateAsync, isLoading, data, reset } = useCreateClass();

  const handleClose = useCallback(() => {
    reset();
    setOpen(false);
    setClassName("");
    setErrorText("");
    setInputError(false);
  }, [setClassName, setErrorText, setInputError, setOpen, reset]);

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
    setClassName(e.target.value);
    if (className.length > 0) {
      setInputError(false);
      setErrorText("");
    }
  };

  const handleEnter = () => {
    if (className.length > 0) {
      mutateAsync({ name: className });
    } else {
      setInputError(true);
      setErrorText("Name must have more than 0 letters");
    }
  };

  const shownErrorText = typeof errorText === "string" ? errorText : "";

  return (
    <Dialog open={open}>
      <DialogTitle sx={{ textAlign: "center" }}>Add a New Class</DialogTitle>
      <DialogContent>
        <TextField
          sx={{
            margin: "8px",
          }}
          required
          label="Class Name"
          id="name"
          value={className}
          onChange={onTextChange}
          disabled={isLoading}
          error={inputError}
          helperText={shownErrorText}
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: COLORS.MEDIUM_BLUE }} onClick={handleEnter}>
          Add Class
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

export default AddClassDialog;

AddClassDialog.propTypes = {
  open: PropTypes.bool,
  refetch: PropTypes.func,
  setOpen: PropTypes.func,
};
