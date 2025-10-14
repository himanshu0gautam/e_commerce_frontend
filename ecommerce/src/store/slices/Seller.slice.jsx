import {createSlice} from '@reduxjs/toolkit'
import {loginSeller,
    selleSendOtpForgetPassword,
    sellerForgetPasswordVerifyOtp,
    sellerResetPassword,
    sellerPhoneVerificatioBySendOtp,
    sellerVerifyPhoneOtp,
    sellerEmailVerificationBySendOtp,
    sellerVerifyEmailOtp
} from '../actions/SellerAction'

const sellerSlice = createSlice({
    name:'seller',
    initialState:{
        seller: null,
        allSellers: [],
        token: null,
        loading: false,
        error: null,
        success: false,
    },
    reducers:{
        logoutSeller: (state) => {
        state.seller = null;
        state.token = null;
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(loginSeller.pending,(state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(loginSeller.fulfilled,(state,action) => {
            state.loading = false,
            state.seller = action.payload.seller
            state.token = action.payload.token
        })
        .addCase(loginSeller.rejected,(state,action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(selleSendOtpForgetPassword.pending,(state) => {
            state.error = null
        })
        .addCase(selleSendOtpForgetPassword.fulfilled,(state) => {
            state.loading = false
        })
        .addCase(selleSendOtpForgetPassword.rejected,(state,action) => {
            state.loading = false,
            state.error = action.payload
        })
        .addCase(sellerForgetPasswordVerifyOtp.pending,(state) => {
            state.error = null
        })
        .addCase(sellerForgetPasswordVerifyOtp.fulfilled,(state) => {
            state.loading = false
        })
        .addCase(sellerForgetPasswordVerifyOtp.rejected,(state,action) => {
            state.loading = false,
            state.error = action.payload
        })
        .addCase(sellerResetPassword.pending,(state) => {
            state.error = false
        })
        .addCase(sellerResetPassword.fulfilled,(state) => {
            state.loading = false
        })
        .addCase(sellerResetPassword.rejected,(state,action) => {
            state.loading = false,
            state.error = action.payload
        })
        .addCase(sellerPhoneVerificatioBySendOtp.pending,(state) => {
            state.loading = false
        })
        .addCase(sellerPhoneVerificatioBySendOtp.fulfilled,(state) => {
            state.loading = false
            state.success = true
        })
        .addCase(sellerPhoneVerificatioBySendOtp.rejected,(state,action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(sellerVerifyPhoneOtp.pending,(state) => {
            state.loading = false
        })
        .addCase(sellerVerifyPhoneOtp.fulfilled,(state) => {
            state.loading = false
            state.success = true
        })
        .addCase(sellerVerifyPhoneOtp.rejected,(state,action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(sellerEmailVerificationBySendOtp.pending,(state) => {
            state.loading = false
        })
        .addCase(sellerEmailVerificationBySendOtp.fulfilled,(state) => {
            state.loading = false
            state.success = true
        })
        .addCase(sellerEmailVerificationBySendOtp.rejected,(state,action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(sellerVerifyEmailOtp.pending,(state) => {
            state.loading = false
        })
        .addCase(sellerVerifyEmailOtp.fulfilled,(state) => {
            state.loading = false
            state.success = true
        })
        .addCase(sellerVerifyEmailOtp.rejected,(state,action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const {logoutSeller} = sellerSlice.actions
export default sellerSlice.reducer