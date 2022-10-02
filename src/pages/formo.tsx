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
            <Grid xs={12}>
                <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
                </Card>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="Nombre(s)" type="text" name="nombre" onChange={handleChange} value={state.nombre}/>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="Apellido(s)" type="text" name="apellido" onChange={handleChange} value={state.apellido}/>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="Correo" type="text" name="correo" onChange={handleChange} value={state.correo}/>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="Contraseña" type="text" name="pass" onChange={handleChange} value={state.pass}/>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="RUT" type="text" name="rut" onChange={handleChange} value={state.rut}/>
            </Grid>

            <Grid xs={4}/>
            <Grid xs={8}>
                <Checkbox.Group
                    label="Roles"
                    orientation="horizontal"
                    color="primary"
                    >
                    <Checkbox value="buenos-aires">Gerente</Checkbox>
                    <Checkbox value="sydney">Administrador</Checkbox>
                    <Checkbox value="london">Analista</Checkbox>
                </Checkbox.Group>
            </Grid>

            <Grid xs={3} md={3}>
                <Button onClick={handleClick}>Editar</Button>
                <Spacer x={0.5} />
                <Button onClick={() => {maradona("/")}} color="error" >Salir</Button>   
            </Grid>    
        </Grid.Container>
    );
  }

export default Formulario