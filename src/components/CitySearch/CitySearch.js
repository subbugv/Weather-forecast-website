import { makeStyles, Box, TextField, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    paddingLeft: "1vh",
  },
});

export default function CitySearch() {
  const defaultCity = "London";
  const [city, setCity] = useState(defaultCity);
  const classes = useStyles();
  const dispatch = useDispatch();
  const address = useSelector((state) => state?.cityDetails?.city);

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };
  const handleOnBlur = () => {
    if (city) setCity(city);
    else if (address) setCity(address);
    else setCity(defaultCity);
  };

  useEffect(() => {
    if (address) setCity(address);
  }, [address]);
  return (
    <Box className={classes.root}>
      <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      <Button
        color="primary"
        onClick={() =>
          dispatch({
            type: "FETCH_LOCATION_REQUESTED",
            payload: city,
          })
        }
      >
        Search
      </Button>
    </Box>
  );
}
