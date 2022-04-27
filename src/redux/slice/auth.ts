import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  auth: any;
};

const initialState: InitialState = {
  auth: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<any>) {
      state.auth = action.payload;
    },

    setLogout(state) {
      state.auth = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice;
