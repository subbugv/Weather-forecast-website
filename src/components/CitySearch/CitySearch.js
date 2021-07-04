import { makeStyles, Box, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    paddingLeft: "1vh",
  },
});

export default function CitySearch() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleOnChange = (e) => setCity(e.target.value);
  return (
    <Box className={classes.root}>
      <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={handleOnChange}
      />
      <Button
        color="primary"
        onClick={() =>
          dispatch({ type: "FETCH_LOCATION_REQUESTED", payload: city })
        }
      >
        Search
      </Button>
    </Box>
  );
}
