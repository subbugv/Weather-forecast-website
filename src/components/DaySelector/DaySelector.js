import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import DayPreview from "../DayPreview/DayPreview";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "0 20px",
  },
});
export default function DaySelector() {
  const classes = useStyles();
  const current = useSelector((state) => state?.weather?.current);
  const week = useSelector((state) => state?.weather?.week);
  const weekInfo =
    current && week
      ? [current, ...week].map((day, i) => {
          if (i === 0) day = { ...day, date: "Today", backgroundColor: "#75a6f0" };
          return <DayPreview day={day} key={day + i} />;
        })
      : "Loading...";
  return <Box className={classes.root}>{weekInfo}</Box>;
}
