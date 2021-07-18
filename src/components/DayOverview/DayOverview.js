import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./DayOverview.css";

export default function DayOverview() {
  const dayDetail = useSelector((state) => state?.weather?.current);
  return dayDetail ? (
    <Fragment>
      <div className={`date lighterFont `}>{dayDetail?.fullDate}</div>
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
          <div className={`humLabel lighterFont `}>Humidity</div>
          <h4 className="normalFont">{dayDetail?.hum}%</h4>
        </div>
        <div className="wind">
          <div className={`windLabel lighterFont `}>Wind Speed</div>
          <h4 className="normalFont">{dayDetail?.wind} m/s</h4>
        </div>
      </div>
    </Fragment>
  ) : (
    "Loading"
  );
}
