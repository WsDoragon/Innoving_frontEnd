import axios from "axios";

const APP_BACKEND_URL= "http://localhost:4000"

 const   clienteAxios =  axios.create({
    baseURL :  APP_BACKEND_URL
})


export default clienteAxios;
