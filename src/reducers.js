export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case "WEATHER_FETCH_SUCCEEDED":
      return { ...state, weather: action.weather };
    case "WEATHER_FETCH_FAILED":
      return { ...state, message: action.message };
    default:
      return state;
  }
};
