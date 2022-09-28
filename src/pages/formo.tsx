import { test } from "../types"
import React from "react"
import { Button, Input, Grid, Card, Text, Checkbox } from "@nextui-org/react";
import Header from "./test_pages/Header_test";

import { useNavigate } from "react-router-dom";

interface a{
    text: string
}

function Formulario() {
    const maradona = useNavigate();

//componente aparte?
    const MockItem = ({ text }: a) => {
        return (
          <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                {text}
              </Text>
            </Card.Body>
          </Card>
        );}

    return (
        <Grid.Container gap={2} justify="center">
            <Header/>
            <Grid xs={12}>
                <MockItem text="Test!"/>
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
                <Button onClick={() => {maradona("/")}} >De vuelta al futuro</Button>
            </Grid>    
        </Grid.Container>
    );
  }

export default Formulario