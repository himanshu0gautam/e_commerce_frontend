import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://192.168.1.33:3000/api",
    withCredentials:true
})

export default axiosInstance
