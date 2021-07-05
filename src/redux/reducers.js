export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case "WEATHER_FETCH_SUCCEEDED":
      return { ...state, weather: action.weather };
    case "WEATHER_FETCH_FAILED":
      return { ...state, message: action.message };
    case  "FETCH_LOCATION_SUCCESS":
        return { ...state, cityDetails: action.cityDetails};
    case "FETCH_LOCATION_FAILED":
        return { ...state, message: action.message}
    default:
      return state;
  }
};
