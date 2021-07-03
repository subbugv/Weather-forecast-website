import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useGeoPosition = (key, city) => {
  const [position, setPosition] = useState({ lat: null, lon: null });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formattedAddress, setFormattedAddress] = useState('')

  const fetchLatandLng = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`
      );
      const result = res?.data?.results[0]?.geometry?.location;
      setFormattedAddress(res?.data.result[0].formatted_address)
      if (result.lat !== null && result.lng !== null) {
        setPosition({ lat: result.lat, lon: result.lng });
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
  },[fetchLatandLng]);

  return [position, formattedAddress, loading, error];
};

export default useGeoPosition;
