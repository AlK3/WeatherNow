import { UPDATE_DAILY_DATA } from "./ActionTypes";

export const updateDailyData = (dataFromServer) => {
  return {
    type: UPDATE_DAILY_DATA,
    payload: dataFromServer,
  };
}