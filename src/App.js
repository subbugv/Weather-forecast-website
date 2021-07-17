import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DaySelector from "./components/DaySelector/DaySelector";
import CitySearch from "./components/CitySearch/CitySearch";
import DayOverview from "./components/DayOverview/DayOverview";
import "./App.css";
import ChartInstance from "./components/ChartInstance/ChartInstance";

function App() {
  const dispatch = useDispatch();
  const position = useSelector((state) => state?.cityDetails?.position);

  useEffect(() => {
    dispatch({
      type: "WEATHER_FETCH_REQUESTED",
      payload: position
        ? position
        : {
            lat: 51.5073509,
            lon: -0.1277583,
          },
    });
  }, [position, dispatch]);
  return (
    <div className="app">
      <div className="header">Weather Forecast</div>
      <CitySearch />
      <div className="bottom">
          <DayOverview />
          <ChartInstance />
          <DaySelector />
      </div>
    </div>
  );
}

export default App;
