import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types";

type InitialState = {
  user: User | null;
};

const initialState: InitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },

    resetAuth(state) {
      state.user = null;
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;

export default authSlice;
