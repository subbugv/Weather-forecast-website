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
        <Typography component={"div"} className={classes.date}>
          Time and Date
        </Typography>
        <Typography component={"div"} className={classes.image}>
          Image
        </Typography>
        <Typography component={"div"} className={classes.bottomLeft}>
          <Typography component={"div"} className={classes.leftBottom}>
            <Typography component={"div"} className={classes.humidity}>
              Humidity
            </Typography>
            <Typography component={"div"} className={classes.wind}>
              Wind Speed
            </Typography>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
