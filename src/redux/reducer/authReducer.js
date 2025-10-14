import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  //call thunks
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export const { logout } = authReducer.actions;
export default authReducer.reducer;
