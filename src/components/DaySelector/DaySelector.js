import React from "react";
import { useSelector } from "react-redux";
import DayPreview from "../DayPreview/DayPreview";
import "./DaySelector.css"

export default function DaySelector() {
  const current = useSelector((state) => state?.weather?.current);
  const week = useSelector((state) => state?.weather?.week);
  const weekInfo =
    current && week
      ? [current, ...week].map((day, i) => {
          if (i === 0) day = { ...day, date: "Today", backgroundColor: "#75a6f0" };
          return <DayPreview day={day} key={day + i} />;
        })
      : "Loading...";
  return <div className="root">{weekInfo}</div>;
}
