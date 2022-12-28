import React from "react";
import { Grid, Button, Link, Spacer, Row} from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Gestion_usuario/Header";
import TestTabla from "../../components/Gestion_usuario/testTabla";
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
      const todo = await axios.get("http://170.187.160.109:3001/users/allEnabled");
      console.log("hola: ",todo.data.data);
      setUsers23(todo.data.data);
    }
    
    useEffect(() => {
      //getUsers();
      navigate("./usuarios_innoving");
      
    }, []);

    const style = {marginLeft: 20}

    return(
        <div style={style}>
        <Spacer y = {0.5} />
        <Row>
                <Button onPress={() => navigate("./usuarios_innoving")} auto flat as={Link} href="#"> Usuarios Innoving </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./usuarios_proveedores")} auto flat as={Link} href="#"> Usuarios Académicos/VIDCA </Button>
        </Row>
        <Spacer x = {0.5} />
        <Outlet />
        </div >
    );
}

export default Administrador;