import React from "react";
import { useSelector } from "react-redux";
import "./DayOverview.css";

export default function DayOverview() {
  const dayDetail = useSelector((state) => state?.weather?.current);
  return dayDetail ? (
    <div className="dayOverview">
      <div className="date">{dayDetail?.fullDate}</div>
      <div className="imageAndTemp">
        <img
          className="image"
          src={`https://openweathermap.org/img/wn/${dayDetail?.icon}@4x.png`}
          alt={dayDetail?.desc}
        />
        <span className="temp">
          {dayDetail.temp}
          <sup className="sup">&deg;C</sup>{" "}
        </span>
      </div>
      <div className="desc">{dayDetail.desc}</div>
      <div className="humidityAndWind">
        <div className="humidity">
          <div className="humLabel">Humidity</div>
          <div>{dayDetail?.hum}%</div>
        </div>
        <div className="wind">
          <div className="windLabel">Wind Speed</div>
          <div>{dayDetail?.wind}</div>
        </div>
      </div>
    </div>
  ) : (
    "Loading"
  );
}
