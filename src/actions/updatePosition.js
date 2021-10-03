import { UPDATE_POSITION } from "./ActionTypes";

export const updatePosition = (position) => {
  return {
    type: UPDATE_POSITION,
    payload: position,
  };
}