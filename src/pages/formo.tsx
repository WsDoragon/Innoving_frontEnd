import { test } from "../types"
import React from "react"
import { Button, Spacer, Input, Grid, Card, Text, Checkbox } from "@nextui-org/react";
import Header from "./test_pages/Header_test";

import { useNavigate } from "react-router-dom";

interface a{
    text: string
}

function Formulario() {
    const maradona = useNavigate();

    return (
        <Grid.Container gap={2} justify="center">
            <Header/>

            <Grid xs={12}>
                <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
                    <Card.Body>
                        <Text h6 size={15} color="white" css={{ m: 0 }}>
                            HOLA ME LLAMO RUSSEL
                        </Text>
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="Nombre(s)"/>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="Apellido(s)"/>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="Correo"/>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="Contraseña"/>
            </Grid>

            <Grid xs={2}/>
            <Grid xs={10}>
                <Input width="75%" placeholder="RUT"/>
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
                <Button>Editar</Button>
                <Spacer x={0.5} />
                <Button onClick={() => {maradona("/")}} color="error" >Salir</Button>   
            </Grid>    
        </Grid.Container>
    );
  }

export default Formulario