import React from "react";
import { Grid, Button, Link} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TestTabla from "../components/testTabla";
import axios from "axios"
import {useState, useEffect} from "react"

type UserType = {
    rut: string
    nombre: string
    apellido: string
    correo:string
    pass: string    
    roles: string
};

function Administrador(){
    const [users23, setUsers23] = useState<UserType[]>([]);

    const getUsers = async () => {
      const todo = await axios.get("http://localhost:3001/users/all");
      console.log("hola: ",todo.data);
      setUsers23(todo.data);
    }
    useEffect(() => {
      getUsers();
    }, []);
  

    const navigate = useNavigate();
    
    const [showResults, setShowResults] = React.useState(false)
    
    const onClick = () => {
        if (showResults) {
        setShowResults(true)
        }
        else{
            setShowResults(true)
        } 
    }

    return(
        <Grid.Container gap={2} justify="center">   
        <Header/>
            <Grid xs={12}>
                <Button onPress={onClick} auto flat as={Link} href="#"> Usuarios </Button>
            </Grid>

            {  showResults ? <TestTabla data = {users23} /> : null }

        </Grid.Container>
    );
}

export default Administrador;