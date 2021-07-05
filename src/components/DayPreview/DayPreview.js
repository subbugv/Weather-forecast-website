import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    height: "20%",
  },
  icon: {
    height: "40%",
    width: "65%",
  },
  humidity: {
    height: "20%",
    fontWeight: "lighter",
    color: "#68696b",
  },
  humid: {
    height: "20%",
  },
});

export default function DayPreview({ day }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <Typography className={classes.date}>{day?.date}</Typography>
        <CardMedia
          className={classes.icon}
          image={`https://openweathermap.org/img/wn/${day?.icon}@2x.png`}
          title={day?.desc}
        />
        <Typography className={classes.humidity}>Humidity</Typography>
        <Typography className={classes.humid}>{day?.hum}%</Typography>
      </CardContent>
    </Card>
  );
}
