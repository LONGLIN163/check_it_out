import axios from "axios";
import router from "../router";

//const haha=`${import.meta.env.VITE_API_BASE_URL}/api`;
//console.log(haha)

const axiosClient=axios.create({
    //"baseURL":`${import.meta.env.VITE_API_BASE_URL}/api`
    "baseURL":'http://127.0.0.1:8000/api'
})

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
    return config
  });

axiosClient.interceptors.response.use( response => {
    return response
}, error => {

  console.log(error)

  if(error.response && error.response.status===401){
    router.navigate("/login")
    return error;
  }
  throw error;
})

export default axiosClient;