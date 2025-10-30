import axios from "axios";


const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3001/api"
    : "http://192.168.1.39:3000/api";

    const baseURL2= "http://192.168.1.48:3000/api"


const axiosInstance = axios.create({
    baseURL,
    withCredentials:true
})

export default axiosInstance
