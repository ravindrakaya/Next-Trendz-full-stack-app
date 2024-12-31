import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navToggle",
  initialState: {
    isClicked: false,
  },
  reducers: {
    toggleNav: (state, action) => {
      state.isClicked = !state.isClicked || action.payload;
    },
  },
});

export const { toggleNav } = navSlice.actions;

export default navSlice.reducer;
