import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../actions/UserAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    logoutUSer: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(LoginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(LoginUser.fulfilled, (state,action) => {
    state.user=action.payload
      state.loading = false;
      state.error = null;
    })
    .addCase(LoginUser.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});


export default userSlice.reducer