import { UPDATE_HEIGHT } from "./ActionTypes";

export const updateHeight = (height) => {
  return {
    type: UPDATE_HEIGHT,
    payload: height,
  };
}