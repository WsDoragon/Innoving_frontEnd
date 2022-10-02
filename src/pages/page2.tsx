import React, { Component } from "react";
import { Grid,Navbar, Button, Link, Card } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "./test_pages/Header_test";

function handler(){
    return(
        <h3>
         Administrador
       </h3>
    )
}

function Analista(){
    const navigate = useNavigate();
    return(
        <Grid.Container gap={2} justify="center">
            <Header/>

            <Grid xs={12}>
                <Navbar variant="sticky">
                    <Navbar.Content variant="highlight" hideIn="xs">
                        <Navbar.Link href="#">Indicadores</Navbar.Link>
                        <Navbar.Link isActive href="#">Solicitudes</Navbar.Link>
                        <Navbar.Item>
                            <Button onClick={()=><h3>admin</h3>} auto flat as={Link} href="#">
                                prueba1
                            </Button>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button auto flat as={Link} href="#">
                                prueba2
                            </Button>
                        </Navbar.Item>
                    </Navbar.Content>
                </Navbar>
            </Grid>

        </Grid.Container>
    );
}

export default Analista;