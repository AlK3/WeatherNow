import { UPDATE_CITY } from "./ActionTypes";

export const updateCity = (city) => {
  return {
    type: UPDATE_CITY,
    payload: city,
  };
}