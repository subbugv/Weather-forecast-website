import { getDate, getTime, getFullDate } from "./helpers/getDateTimeFormat";

export const Api = {
  fetchWeather: async ({ lat = "51.509865", lon = "-0.118092" }) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const dayDetail = data.hourly.map((hour) => {
        return {
          time: getTime(hour.dt),
          temp: Math.round(hour.temp),
        };
      });
      const week = data.daily.slice(1, 6);
      const weekDetail = week.map((day) => {
        return {
          date: getDate(day.dt),
          temp: {
            min: Math.round(day.temp.min),
            max: Math.round(day.temp.max),
            day: Math.round(day.temp.day),
          },
          hum: day.humidity,
          desc: day.weather[0].main,
          icon: day.weather[0].icon,
        };
      });

      const weatherInfo = {
        current: {
          city: data.timezone,
          date: getDate(data.current.dt),
          fullDate: getFullDate(data.current.dt),
          lat: data.lat,
          lon: data.lon,
          temp: Math.round(data.current.temp),
          icon: data.current.weather[0].icon,
          desc: data.current.weather[0].main,
          hum: data.current.humidity,
          wind: data.current.wind_speed,
        },
        day: dayDetail,
        week: weekDetail,
      };
      return weatherInfo;
    } catch (err) {
      console.log(err);
    }
  },
  fetchLatAndLon: async (city = "London") => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const result = data?.results[0]?.geometry?.location;
      const address = data?.results[0]?.formatted_address;
      const cityDetails = {
        position: {
          lat: result.lat,
          lon: result.lng,
        },
        city: address,
      };
      return cityDetails;
    } catch (e) {
      console.log(e);
    }
  },
};
