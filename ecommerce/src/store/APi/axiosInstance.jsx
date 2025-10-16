import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL:"http://localhost:3000/api",
=======
    baseURL:"http://192.168.1.58:3000/api",
>>>>>>> kunal
    withCredentials:true
})

export default axiosInstance
