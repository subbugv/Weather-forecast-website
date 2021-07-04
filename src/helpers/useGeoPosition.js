import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useGeoPosition = (
  city = "London",
  key = process.env.REACT_APP_GOOGLE_API_KEY
) => {
  const [position, setPosition] = useState({ lat: null, lon: null });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formattedAddress, setFormattedAddress] = useState("");

  const fetchLatandLng = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`
      );
      const result = await res?.data?.results[0]?.geometry?.location;
      if (result) {
        setPosition({ lat: result.lat, lon: result.lng });
        setFormattedAddress(res.data.results[0].formatted_address);
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [city, key]);

  useEffect(() => {
    fetchLatandLng();
  }, [fetchLatandLng]);
  // console.log(position, formattedAddress, loading, error)
  return [position, formattedAddress, loading, error];
};

export default useGeoPosition;
