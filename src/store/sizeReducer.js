import { createAction, createReducer } from "@reduxjs/toolkit";
import { UPDATE_HEIGHT, UPDATE_WIDTH } from "../actions/ActionTypes";

const initislState = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const updateWidth = createAction(UPDATE_WIDTH);
const updateHeight = createAction(UPDATE_HEIGHT);

export const sizeReducer = createReducer(initislState, {
  [updateWidth]: (state, action) => {
    state.width = action.payload;
  },
  [updateHeight]: (state, action) => {
    state.height = action.payload;
  },
});