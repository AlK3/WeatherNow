import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { UPDATE_CITY } from "../actions/ActionTypes";

const initialState = {
  city: '',
}

export const citySlice = createSlice({
  name: 'city',
  initialState: initialState,
  reducers: {
    update(state, action) {
      state.city = action.payload;
    }
  }
});

export const { update } = citySlice.actions;
export const cityReducer = citySlice.reducer;