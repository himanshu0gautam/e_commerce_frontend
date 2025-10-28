import axios from "axios";


const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "http://172.31.0.1:3000/api";


const axiosInstance = axios.create({
    baseURL,
    withCredentials:true
})

export default axiosInstance
