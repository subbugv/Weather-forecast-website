import React from "react";
import "./DayPreview.css"

export default function DayPreview({ day }) {
  return (
    <div className="dayPreview">
        <div className="day">{day?.date}</div>
        <img
          className="icon"
          src={`https://openweathermap.org/img/wn/${day?.icon}@2x.png`}
          alt={day?.desc}
        />
        <div className={`humidity lighterFont `}>Humidity</div>
        <div className={`humid lighterFont `}>{day?.hum}%</div>
    </div>
  );
}
