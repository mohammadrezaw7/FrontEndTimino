import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    code: null,
    accessToken: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
  },
  reducers: {
    addEmail(sate, actoin) {
      sate.email = actoin.payload;
    },
    addCode(sate, actoin) {
      sate.code = actoin.payload;
    },
    resetEmailAndCode(state) {
      state.email = null;
      state.code = null;
    },
    setAccessToken(state, { payload }) {
      localStorage.setItem("token", payload);
      state.accessToken = payload;
    },
    setUserId(state, { payload }) {
      localStorage.setItem("userId", payload);
      state.userId = payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
