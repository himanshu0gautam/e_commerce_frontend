import { createSlice } from "@reduxjs/toolkit";
import {
   LoginUser,
   checkuser,
   LoginUserInfo,
    logOutUser,
    register,
    userSendOtpForgetPassword,
    userSendverifyForgetPassword,
    userResetpassowrd
 } from "../actions/UserAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userExist:null,
    user: null,
    loading: false,
    error: null,
    authError:null,
    success: false,
    OTPSend:false,
    forgetPasswordError:null,
    resetPassowrd:false
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
    })
    .addCase(checkuser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(checkuser.fulfilled, (state,action) => {
      state.userExist=action.payload
      state.loading = false;
      state.error = null;
    })
    .addCase(checkuser.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(LoginUserInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(LoginUserInfo.fulfilled, (state,action) => {
      state.user = action.payload.user
      state.loading = false;
      state.success=true
      state.error = null;
    })
    .addCase(LoginUserInfo.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(logOutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(logOutUser.fulfilled, (state) => {
      state.userExist=null
      state.user = null
      state.loading = false;
      state.success=false
      state.error = null;
    })
    .addCase(logOutUser.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(register.pending, (state) => {
      state.loading = true;
      state.authError = null;
    })
    .addCase(register.fulfilled, (state,action) => {
      state.user = action.payload
      state.loading = false;
      state.success=true
      state.authError = null;
    })
    .addCase(register.rejected, (state,action) => {
      state.loading = false;
      state.authError = action.payload;
    })
    .addCase(userSendOtpForgetPassword.pending, (state) => {
      state.loading = true;
      state.forgetPasswordError = null;
    })
    .addCase(userSendOtpForgetPassword.fulfilled, (state) => {
      state.loading = false;
      state.OTPSend=true
      state.forgetPasswordError = null;
    })
    .addCase(userSendOtpForgetPassword.rejected, (state,action) => {
      state.loading = false;
      state.forgetPasswordError = action.payload;
    })
    .addCase(userSendverifyForgetPassword.pending, (state) => {
      state.loading = true;
      state.forgetPasswordError = null;
    })
    .addCase(userSendverifyForgetPassword.fulfilled, (state) => {
      state.loading = false;
      state.OTPSend=false
      state.forgetPasswordError = null;
    })
    .addCase(userSendverifyForgetPassword.rejected, (state,action) => {
      state.loading = false;
      state.forgetPasswordError = action.payload;
    })
    .addCase(userResetpassowrd.pending, (state) => {
      state.loading = true;
      state.forgetPasswordError = null;
    })
    .addCase(userResetpassowrd.fulfilled, (state) => {
      state.loading = false;
      state.resetPassowrd=true
      state.forgetPasswordError = null;
    })
    .addCase(userResetpassowrd.rejected, (state,action) => {
      state.loading = false;
      state.forgetPasswordError = action.payload;
    });
  },
});


export default userSlice.reducer