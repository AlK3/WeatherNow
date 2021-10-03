import { createAction, createReducer } from "@reduxjs/toolkit";
import { UPDATE_CITY } from "../actions/ActionTypes";

const initislState = {
  city: '',
}

const updateCity = createAction(UPDATE_CITY);

export const cityReducer = createReducer(initislState, {
  [updateCity]: (state, action) => {
    state.city = action.payload;
  },
});