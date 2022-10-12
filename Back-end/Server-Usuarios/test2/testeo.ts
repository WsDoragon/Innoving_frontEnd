import axios from "axios"



const getUsers = async () => {
const todo = await axios.get("http://localhost:3001/users/all");
      console.log("hola: ",todo.data);
}

let i = 0
while(i < 30){
    getUsers()
    console.log(i)
    i++
}