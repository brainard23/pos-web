import { Paper } from "@mui/material";
import React from "react";

const Container = (props) => {
  const { styles, elevation, children, className} = props;
  return (
    <Paper style={styles} elevation={elevation} className={className}>
      {children}
    </Paper>
  );
};

export default Container;
