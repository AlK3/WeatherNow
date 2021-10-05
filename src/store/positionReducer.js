import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: [40.712778, -74.006111],
}

const positionSlice = createSlice({
  name: 'position',
  initialState: initialState,
  reducers: {
    updatePosition(state, action) {
      state.position = action.payload;
    }
  },
});

export const { updatePosition } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;