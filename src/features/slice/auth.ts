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
    setLogin(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },

    setLogout(state) {
      state.user = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice;
