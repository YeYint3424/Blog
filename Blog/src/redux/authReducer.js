import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
    },
    signOut: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {signIn, signOut} = authSlice.actions;
export default authSlice.reducer