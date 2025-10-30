import axios from "axios";


const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "http://192.168.1.48:3000/api";

const baseURL_2 = 
window.location.hostname === "localhost"
  ? "http://localhost:3001/api"
  : "http://192.168.1.38:3001/api";


const axiosInstance = axios.create({
    baseURL,
    withCredentials:true
})

const axiosInstance_2 = axios.create({
  baseURL:baseURL_2,
  withCredentials:true
})

export default axiosInstance;

export {axiosInstance_2};
