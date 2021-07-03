import React from "react";
import ChartInstance from "../ChartInstance/ChartInstance";
import DaySelector from "../DaySelector/DaySelector";

export default function ChartArea() {
  return (
    <div>
      <ChartInstance />
      <DaySelector />
    </div>
  );
}
