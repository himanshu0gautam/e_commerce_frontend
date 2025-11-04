import {createAsyncThunk} from "@reduxjs/toolkit"
import axiosInstance from "../APi/axiosInstance"


export const checkuser  = createAsyncThunk(
    'check-user',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res  =await axiosInstance.post('/auth/check-user',credentialas)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const LoginUser = createAsyncThunk(
    "user/login",
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/login',credentialas)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const LoginUserInfo = createAsyncThunk(
    '/user/me',
    async (_,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.get('/auth/me')
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const logOutUser = createAsyncThunk(
    '/logout',
    async (_,rejectWithValue) => {
        try {
            const res = await axiosInstance.get('/auth/logout')
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const userSendOtpForgetPassword = createAsyncThunk(
    'send-otp',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/forget-password',credentialas)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const userSendverifyForgetPassword = createAsyncThunk(
    'verify-otp',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/verify-Forgot-Otp',credentialas)
            console.log(res.data);
            
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)
export const userResetpassowrd = createAsyncThunk(
    'reset-passwored',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/reset-password',credentialas)
            console.log(res.data);
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const register  =createAsyncThunk(
    '/register',
    async (credentialas,{rejectWithValue}) => {
        try {
            const res = await axiosInstance.post('/auth/register',credentialas)
            console.log(res.data);
            
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)