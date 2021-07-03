import { put, takeEvery, all } from "redux-saga/effects";
import { Api } from "../src/Api";

function* fetchWeather(action) {
  try {
    const weather = yield Api.fetchWeather(action.payload);
    yield put({ type: "WEATHER_FETCH_SUCCEEDED", weather: weather });
  } catch (e) {
    yield put({ type: "WEATHER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("WEATHER_FETCH_REQUESTED", fetchWeather);
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
