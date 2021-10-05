import { createAction, createReducer } from "@reduxjs/toolkit";
import { UPDATE_CURRENT_DATA, UPDATE_DAILY_DATA } from "./ActionTypes";

const initialState = {
  currentData: {},
  dailyData: [],
}

const updateCurrentData = createAction(UPDATE_CURRENT_DATA);
const updateDailyData = createAction(UPDATE_DAILY_DATA);

export const dataReducer = createReducer(initialState, {
  [updateCurrentData]: (state, action) => {
    state.currentData = action.payload;
  },
  [updateDailyData]: (state, action) => {
    state.dailyData = action.payload;
  },
});