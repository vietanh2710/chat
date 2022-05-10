import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserUid } from "types";

type InitialState = {
  user: UserUid | null;
};

const initialState: InitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<UserUid>) {
      state.user = action.payload;
    },

    resetAuth(state) {
      state.user = null;
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;

export default authSlice;
