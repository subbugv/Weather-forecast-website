import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: "100%",
  },
  cardContent: {
    textAlign: "center",
    height: "calc(100% - 40px)",
  },
  date: {
    height: "25%",
    width: "100%",
  },
  image: {
    height: "50%",
    width: "100%",
  },
  bottomLeft: {
    height: "25%",
    width: "100%",
  },
  leftBottom: {
    display: "flex",
  },
  humidity: {
    width: "50%",
  },
  wind: {
    width: "50%",
  },
});

export default function DayOverview() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.date}>Time and Date</Typography>
        <Typography className={classes.image}>Image</Typography>
        <Typography className={classes.bottomLeft}>
          <Typography className={classes.leftBottom}>
            <Typography className={classes.humidity}>Humidity</Typography>
            <Typography className={classes.wind}>Wind Speed</Typography>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
