import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA_BY_POSITION } from '../actions/ActionTypes';
import { updateCurrentData } from '../actions/updateCurrentData';
import { updateDailyData } from '../actions/updateDailyData';
import { updatePosition } from '../actions/updatePosition';
import { KEY } from '../key';

function fetchCurrentData(position) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position[0]}&lon=${position[1]}&appid=${KEY}`)
    .then(response => response.json());
}

function fetchDailyData(lat, lon) {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${KEY}`)
    .then(response => response.json());
}

function* workerLoadDataBP({ position }) {
  const currentData = yield call(fetchCurrentData, position);
  console.log(currentData);
  yield put(updateCurrentData(currentData));
  yield put(updatePosition([currentData.coord.lat, currentData.coord.lon]));
  const data = yield call(fetchDailyData, currentData.coord.lat, currentData.coord.lon);
  const dailyData = data.daily.map(day => {
    return {'dt': new Date(day.dt * 1000).getUTCDate(), 'temp': Math.round(day.temp.day - 273.15), 'humidity': day.humidity};
  });
  yield put(updateDailyData(dailyData));
}

export function* watchLoadDataBP() {
  yield takeEvery(LOAD_DATA_BY_POSITION, workerLoadDataBP);
} 