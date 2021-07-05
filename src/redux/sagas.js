import { put, takeEvery, all } from "redux-saga/effects";
import { Api } from "../Api";

function* fetchWeather(action) {
  try {
    const weather = yield Api.fetchWeather(action.payload);
    yield put({ type: "WEATHER_FETCH_SUCCEEDED", weather: weather });
  } catch (e) {
    yield put({ type: "WEATHER_FETCH_FAILED", message: e.message });
  }
}

function* fetchLocation(action) {
  try {
    const cityDetails = yield Api.fetchLatAndLon(action.payload);
    yield put({ type: "FETCH_LOCATION_SUCCESS", cityDetails: cityDetails });
  } catch (e) {
    yield put({ type: "FETCH_LOCATION_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("WEATHER_FETCH_REQUESTED", fetchWeather);
  yield takeEvery("FETCH_LOCATION_REQUESTED", fetchLocation);
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
