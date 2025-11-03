import axios from "axios";


const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
<<<<<<< HEAD
    : "http://192.168.1.43:3000/api";

    // const baseURL2= "http://192.168.1.48:3000/api"

const baseURL_2 = 
window.location.hostname === "localhost"
  ? "http://localhost:3001/api"
  : "http://192.168.1.43:3001/api";
=======
    : "http://192.168.1.48:3000/api";
>>>>>>> f5e366afbb295a6b3ae991e37c60694197deaaf5


const axiosInstance = axios.create({
    baseURL,
    withCredentials:true
})

export default axiosInstance
