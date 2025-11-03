import {createAsyncThunk} from "@reduxjs/toolkit"
import axiosInstance from "../APi/axiosInstance"

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