import { configureStore } from "@reduxjs/toolkit";

import messageSlice from "./message-slice";
import authSlice from "./auth";

const store = configureStore({
  reducer: { message: messageSlice.reducer, auth: authSlice.reducer },
});

export default store;
