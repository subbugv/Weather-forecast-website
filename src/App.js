import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartArea from "./components/ChartArea/ChartArea";
import CitySearch from "./components/CitySearch/CitySearch";
import DayOverview from "./components/DayOverview/DayOverview";

const useStyles = makeStyles({
  root: {
    margin: "20px",
  },
  header: {
    color: "rgb(0, 41, 102)",
    textAlign: "center",
    fontSize: "calc(10px + 2vmin)",
    fontWeight: "bold",
    fontFamily: "Barlow, sans-serif",
    lineHeight: "42px",
    zIndex: 1,
    margin: "0px",
    transition: "font-size 0.2s ease 0s",
  },
  bottom: {
    display: "flex",
  },
  bottomLeft: {
    width: "40%",
  },
  bottomRight: {
    width: "60%",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const position = useSelector((state) => state?.cityDetails?.position);

  useEffect(() => {
    dispatch({
      type: "WEATHER_FETCH_REQUESTED",
      payload: position
        ? position
        : {
            lat: 51.5073509,
            lon: -0.1277583,
          },
    });
  }, [position, dispatch]);
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>Weather Forecast</Box>
      <CitySearch />
      <Box className={classes.bottom}>
        <Box className={classes.bottomLeft}>
          <DayOverview />
        </Box>
        <Box className={classes.bottomRight}>
          <ChartArea />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
