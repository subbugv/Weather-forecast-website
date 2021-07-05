import React, { Fragment } from "react";
import ChartInstance from "../ChartInstance/ChartInstance";
import DaySelector from "../DaySelector/DaySelector";

export default function ChartArea() {
  return (
    <Fragment>
      <ChartInstance />
      <DaySelector />
    </Fragment>
  );
}
