import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: Cookies.get("jwt_token") || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      Cookies.set("jwt_token", action.payload, { expires: 1 });
    },
    removeToken: (state) => {
      state.token = null;
      Cookies.remove("jwt_token");
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
