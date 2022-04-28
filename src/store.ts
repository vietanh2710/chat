import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authSlice from "./ducks/slice/auth";

const reducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
