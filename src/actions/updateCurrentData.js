import { UPDATE_CURRENT_DATA } from "./ActionTypes";

export const updateCurrentData = (dataFromServer) => {
  return {
    type: UPDATE_CURRENT_DATA,
    payload: dataFromServer,
  };
}