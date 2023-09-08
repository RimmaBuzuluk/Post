import React from "react";
import styles from "../style/SideBlock.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const SideBlock = ({ title, children }) => {
  return (
    <Paper className="root">
      <Typography variant="h6" className="title">
        {title}
      </Typography>
      {children}
    </Paper>
  );
};