import { createAction, createReducer } from "@reduxjs/toolkit";
import { UPDATE_POSITION } from "../actions/ActionTypes";

const initialState = {
  position: [40.712778, -74.006111],
}

const updatePosition = createAction(UPDATE_POSITION);

export const positionReducer = createReducer(initialState, {
  [updatePosition]: (state, action) => {
    state.position = action.payload;
  },
});