import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomDialog({ open, setOpen, handleDelete, setDeleteIndex }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        setOpen(false);
        setDeleteIndex(null);
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle style={{ color: "red" }}>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this celebrity?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button style={{ color: "red" }} onClick={handleDelete}>
          Yes
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
            setDeleteIndex(null);
          }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
