import { test } from "../types"
import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FormElement ,Button, Spacer, Input, Grid, Card, Text, Checkbox } from "@nextui-org/react";
import Header from "./test_pages/Header_test";


interface a{
    text: string
}

function Formulario() {
    const maradona = useNavigate();

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        pass: "",
        correo: "",
        rut: "",
        gerente: false,
        admin: false,
        analista: false,
      });

    function handleChange(e: React.ChangeEvent<FormElement>) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value,
        });
      }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement,  MouseEvent>) => {
      //e.preventDefault();
  
      console.log('handleClick 👉️', state);
    };      

    return (
        <Grid.Container gap={2} justify="center">

            <Input width="75%" placeholder="Nombre(s)" type="text" name="nombre" onChange={handleChange} value={state.nombre}/>
            <Spacer y={3} />
            <Input width="75%" placeholder="Apellido(s)" type="text" name="apellido" onChange={handleChange} value={state.apellido}/>
            <Spacer y={3} />

            <Input width="75%" placeholder="Correo" type="text" name="correo" onChange={handleChange} value={state.correo}/>
            <Spacer y={3} />
            <Input width="75%" placeholder="Contraseña" type="text" name="pass" onChange={handleChange} value={state.pass}/>
            <Spacer y={3} />

            <Input width="75%" placeholder="RUT" type="text" name="rut" onChange={handleChange} value={state.rut}/>
            <Spacer y={3} />

                <Grid.Container justify="center">
                
                <Checkbox.Group
                    label="Roles"
                    orientation="horizontal"
                    color="primary"
                    >
                    <Checkbox value="buenos-aires">Gerente</Checkbox>
                    <Checkbox value="sydney">Administrador</Checkbox>
                    <Checkbox value="london">Analista</Checkbox>
                </Checkbox.Group>
                <Spacer y={6}/>
                </Grid.Container>
                <Button onClick={handleClick}>Editar</Button>
                    <Spacer x={0.5} />
                    <Button onClick={() => {maradona("/")}} color="error" >Salir</Button> 
 
        </Grid.Container>
    );
  }

export default Formulario