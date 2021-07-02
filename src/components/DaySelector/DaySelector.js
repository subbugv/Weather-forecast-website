import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import DayPreview from "../DayPreview/DayPreview";

const useStyles = makeStyles({
  root: {
    display: 'flex',
  }
})
export default function DaySelector() {
  const classes = useStyles();
  const days = [1, 2, 3, 4];
  const day = days.map((day, i) => <DayPreview day={day} key={day + i} />);
  return <Box className={classes.root}>{day}</Box>;
}
