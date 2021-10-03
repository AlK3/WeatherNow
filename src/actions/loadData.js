import { LOAD_DATA_BY_CITY, LOAD_DATA_BY_POSITION } from "./ActionTypes";

export const loadDataByCity = (city) => {
  return {
    type: LOAD_DATA_BY_CITY,
    city,
  };
}

export const loadDataByPosition = (position) => {
  return {
    type: LOAD_DATA_BY_POSITION,
    position,
  };
}