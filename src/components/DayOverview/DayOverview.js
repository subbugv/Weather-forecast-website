import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

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
    fontWeight: "lighter",
    color: "#68696b",
    fontSize: "2vw",
  },
  image: {
    height: "90%",
    width: "60%",
  },
  temp: {
    textAlign: "center",
    fontSize: "4vw",
  },
  desc: {
    height: "14%",
    fontSize: "3vw",
  },
  dayOverview: {
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
  humLabel: {
    fontWeight: "lighter",
    color: "#68696b",
  },
  windLabel: {
    fontWeight: "lighter",
    color: "#68696b",
  },
  iconAndTemp: {
    height: "36%",
    display: "flex",
    alignItems: "center",
  },
  sup: {
    fontSize: "2vw",
  },
});

export default function DayOverview() {
  const classes = useStyles();
  const dayDetail = useSelector((state) => state?.weather?.current);
  return dayDetail ? (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.date}>{dayDetail?.fullDate}</Typography>
        <div className={classes.iconAndTemp}>
          <CardMedia
            className={classes.image}
            image={`https://openweathermap.org/img/wn/${dayDetail?.icon}@4x.png`}
            title={dayDetail?.desc}
          />
          <span className={classes.temp}>
            {dayDetail.temp}
            <sup className={classes.sup}>&deg;C</sup>{" "}
          </span>
        </div>
        <Typography className={classes.desc}>{dayDetail.desc}</Typography>
        <div className={classes.dayOverview}>
          <div className={classes.leftBottom}>
            <div className={classes.humidity}>
              <Typography className={classes.humLabel}>Humidity</Typography>
              <Typography>{dayDetail?.hum}%</Typography>
            </div>
            <div className={classes.wind}>
              <Typography className={classes.windLabel}>Wind Speed</Typography>
              <Typography>{dayDetail?.wind}</Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    "Loading"
  );
}
