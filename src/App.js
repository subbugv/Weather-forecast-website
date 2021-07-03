import { Box, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ChartArea from "./components/ChartArea/ChartArea";
import CitySearch from "./components/CitySearch/CitySearch";
import DayOverview from "./components/DayOverview/DayOverview";
import { getGeoLocation } from "./helpers/getGeoLocation";
import useGeoPosition from "./helpers/useGeoPosition";

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
  // const [location, setLocation] = useState({
  //   lat: "51.509865",
  //   lon: "-0.118092",
  // });
  const [city, setCity] = useState("London");
  const [position, address, geoloading, geoerror] = useGeoPosition(
    process.env.REACT_APP_GOOGLE_API_KEY,
    city
  );
  const dispatch = useDispatch();
  // const getCurrentLocation = () => {
  //   getGeoLocation()
  //     .then((position) => {
  //       setLocation({
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err.message);
  //     });
  // };
    console.log(position)
  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  useEffect(() => {
    dispatch({ type: "WEATHER_FETCH_REQUESTED", payload: position });
  }, [position, dispatch]);
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>Weather Forecast</Box>
      <CitySearch handleOnChange={handleOnChange} city={city} />
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
