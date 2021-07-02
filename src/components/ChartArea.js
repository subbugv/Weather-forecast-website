import React, { useState } from "react";
import ChartInstance from "./ChartInstance";

export default function ChartArea() {
  const [city, setCity] = useState('London');
  
  const handleOnChange =(event) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <div className="city">
        <label htmlFor="city">Your City</label>
        <input type="text" placeholder="Enter your city" name="city" id="city" value={city} onChange={handleOnChange}/>
      </div>
      <ChartInstance city={city}/>
    </div>
  );
}
