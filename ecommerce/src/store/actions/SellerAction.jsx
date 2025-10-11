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
