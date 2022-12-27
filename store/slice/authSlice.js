import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    name: "Durgesh",
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
