import { UPDATE_WIDTH } from "./ActionTypes";

export const updateWidth = (width) => {
  return {
    type: UPDATE_WIDTH,
    payload: width,
  };
}