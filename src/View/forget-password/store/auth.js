import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { email: "", code: "" },
    reducers: {
        addEmail(sate, actoin) {
            sate.email = actoin.payload;
        },
        addCode(sate, actoin) {
            sate.code = actoin.payload;
        },
        resetEmailAndCode(state) {
            state.email = "";
            state.code = "";
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;