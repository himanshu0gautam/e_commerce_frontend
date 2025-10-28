import {createAsyncThunk} from '@reduxjs/toolkit'
import axiosInstance  from '../APi/axiosInstance'


export const loginSeller = createAsyncThunk(
    'seller/login',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/seller/login',credentialas);
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const selleSendOtpForgetPassword = createAsyncThunk(
    '/seller/send-opt',
    async (credentialas,{rejectWithValue}) => {
        try {       
            const res = await axiosInstance.post('/auth/seller/forget-password',credentialas)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const sellerForgetPasswordVerifyOtp = createAsyncThunk(
    '/seller/verify-otp',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/seller/verify-Forgot-Otp',credentialas)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const sellerResetPassword = createAsyncThunk(
    '/seller/reset-password',
    async (credentialas,{rejectWithValue}) => {
        try { 
            const res = await axiosInstance.post('/auth/seller/reset-password',credentialas)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const sellerPhoneVerificatioBySendOtp = createAsyncThunk(
    '/seller/seller-register-send-otp',
    async (credentialas,{rejectWithValue}) => {
        try {            
            const res = await axiosInstance.post('/auth/seller/seller-register-send-otp',{phone:credentialas})
            return res.data
        } catch (error) {
            console.error('Axios error:', error);
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const sellerVerifyPhoneOtp = createAsyncThunk(
    '/seller/seller-register-verify-opt',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/seller/seller-register-verify-opt',credentialas)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const sellerEmailVerificationBySendOtp = createAsyncThunk(
    '/seller/emailSendOpt',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/seller/seller-register-send-email-otp',{email:credentialas})
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)


export const sellerVerifyEmailOtp = createAsyncThunk(
    '/seller/EmailVerifyOtp',
    async (credentialas,{rejectWithValue}) => {
        try {
            console.log(credentialas);
            
            const res = await axiosInstance.post('/auth/seller/seller-register-verify-email-otp',credentialas)
            return res.data
        } catch (error) {
            console.log("axios error",error.response);
            
            rejectWithValue(error.response.data.message)
        }
    }
)

export const sellerRegistration = createAsyncThunk(
    '/seller/register',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/seller/register',credentialas)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const getAllSeller = createAsyncThunk(
    '/seller/getAllseller',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.get('/admin/all-seller',{
                params:credentialas
            })
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const getSingleSeller = createAsyncThunk(
    '/seller/getSingleSeller',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.get(`/admin/Single-seller/${credentialas.sellerId}`)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

