import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000/api",
<<<<<<< HEAD
=======
    // baseURL:"http://192.168.1.58:3000/api",
>>>>>>> 22ab95ae4708e4cb59ab71ca3bc17b2ebe603a1b
    withCredentials:true
})

export default axiosInstance
