import axios from "axios";

const APP_BACKEND_URL= "http://170.187.160.109:3001"

 const   clienteAxios =  axios.create({
    baseURL :  APP_BACKEND_URL
})


export default clienteAxios;
