import React, { Component } from "react";
import { Grid, Navbar, Button, Link, Text, Card } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "./test_pages/Header_test";
import { text } from "stream/consumers";
import Componente1 from "./test_pages/componente";
import Formulario from "./formo";

function Analista(){
    const navigate = useNavigate();
    
    const [showResults, setShowResults] = React.useState(false)
    const [showResults2, setShowResults2] = React.useState(false)
    
    const onClick = () => {
        if (showResults) {
        setShowResults(false)
        }
        else{
            setShowResults(true)
            setShowResults2(false)
        } 
    }

    const onClick2 = () => {
        if (showResults2) {
        setShowResults2(false)
        }
        else{
            setShowResults2(true)
            setShowResults(false)
        } 
    }

    return(
        <Grid.Container gap={2} justify="center">
            <Header/>

            <Grid xs={12}>
                <Button onClick={onClick} auto flat as={Link} href="#"> Indicadores </Button>
                <Button onClick={onClick2} auto flat as={Link} href="#">Solicitudes</Button>
            </Grid>

            {  showResults ? <Componente1 /> : null }
            {  showResults2 ? <Formulario /> : null }

        </Grid.Container>
    );
}

export default Analista;