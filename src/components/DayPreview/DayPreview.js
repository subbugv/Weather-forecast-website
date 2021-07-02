import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "25%",
    flexDirection: "column",
  },
  card: {
    textAlign: "center",
  },
});

export default function DayPreview({ day }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <Typography>{day}</Typography>
        <Typography>Image</Typography>
        <Typography>Humidity</Typography>
        <Typography>Percentage %</Typography>
      </CardContent>
    </Card>
  );
}
