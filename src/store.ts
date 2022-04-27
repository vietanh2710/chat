import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./features/slice/auth";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
