import { makeStyles, Box, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    paddingLeft: "1vh",
  },
});

export default function CitySearch({ handleOnChange, city }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={handleOnChange}
      />
    </Box>
  );
}
