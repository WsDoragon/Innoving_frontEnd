import React from "react";
import { Grid, Button, Link, Spacer} from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";
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
    status:number
};

function Administrador(){
    const [users23, setUsers23] = useState<UserType[]>([]);
    const navigate = useNavigate();

    const getUsers = async () => {
      const todo = await axios.get("http://localhost:3001/users/allEnabled");
      console.log("hola: ",todo.data.data);
      setUsers23(todo.data.data);
    }
    
    useEffect(() => {
      getUsers();
      navigate("./usuarios_innoving");
      
    }, []);

    return(
        <>
        <Header />
        <Grid.Container  gap={2} justify="center">
            <Grid xs={12}>
                <Button onPress={() => navigate("./usuarios_innoving")} auto flat as={Link} href="#"> Usuarios Innoving </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./usuarios_proveedores")} auto flat as={Link} href="#"> Usuarios Académicos/VIDCA </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./usuarios_inn_des")} auto flat as={Link} href="#"> Usuarios desactivados Innoving </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./usuarios_prov_des")} auto flat as={Link} href="#"> Usuarios desactivados Académicos/VIDCA </Button>
            </Grid>
        </Grid.Container>
        <Outlet />
        </>
    );
}

export default Administrador;