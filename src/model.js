import { createStore, createEvent, createEffect } from 'effector';
import { KEY } from './consts';

const initialState = {
  currentData: {},
  dailyData: [],
}

export const updateCity = createEvent();
export const updatePosition = createEvent();

export const loadDataByCity = createEffect('loadDataByCity').use(async ({ city }) => {
  const currentData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
    .then(response => response.json());
  updatePosition([currentData.coord.lat, currentData.coord.lon]);
  const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${KEY}`)
    .then(response => response.json());
  const dailyData = data.daily.map(day => {
      return {'dt': new Date(day.dt * 1000).getUTCDate(), 'temp': Math.round(day.temp.day - 273.15), 'humidity': day.humidity};
  });

  return {
    currentData: currentData,
    dailyData: dailyData,
  };
});

export const loadDataByPosition = createEffect('loadDataByPosition').use(async ({ position }) => {
  const currentData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position[0]}&lon=${position[1]}&appid=${KEY}`)
    .then(response => response.json());
  updatePosition([currentData.coord.lat, currentData.coord.lon]);
  const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${KEY}`)
    .then(response => response.json());
  const dailyData = data.daily.map(day => {
      return {'dt': new Date(day.dt * 1000).getUTCDate(), 'temp': Math.round(day.temp.day - 273.15), 'humidity': day.humidity};
  });

  return {
    currentData: currentData,
    dailyData: dailyData,
  };
});

export const $city = createStore('')
                      .on(updateCity, (state, city) => city);
export const $position = createStore([40.712778, -74.006111])
                      .on(updatePosition, (state, pos) => pos);
export const $data = createStore(initialState)
                      .on(loadDataByCity.done, (state, { result }) => result)
                      .on(loadDataByPosition.done, (state, { result }) => result);