import React, { useState } from "react";
import Chart from "./Chart";

export default function ChartArea() {
  const [city, setCity] = useState('London');
  
  const handleOnChange =(event) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <div className="city">
        <label htmlFor="city">Your City</label>
        <input type="text" placeholder="Enter your city" name="city" id="city" onChange={handleOnChange}/>
      </div>
      <Chart city={city}/>
    </div>
  );
}
