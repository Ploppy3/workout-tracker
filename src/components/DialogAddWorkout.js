import { Dialog } from "@material-ui/core";
import React from "react";

export const DialogAddWorkout = ({ onClose }) => {
  return (
    <>
      <Dialog open={true} onClose={onClose} onBackdropClick={() => onClose()}>
        okay
      </Dialog>
    </>
  );
};
