import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CitySearch.css"

export default function CitySearch() {
  const defaultCity = "London";
  const [city, setCity] = useState(defaultCity);
  const dispatch = useDispatch();
  const address = useSelector((state) => state?.cityDetails?.city);

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };
  const handleOnBlur = () => {
    if (city) setCity(city);
    else if (address) setCity(address);
    else setCity(defaultCity);
  };

  useEffect(() => {
    if (address) setCity(address);
  }, [address]);
  return (
    <div className="citySearch">
      <input
        value={city}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      <button
        onClick={() =>
          dispatch({
            type: "FETCH_LOCATION_REQUESTED",
            payload: city,
          })
        }
      >
        Search
      </button>
    </div>
  );
}
