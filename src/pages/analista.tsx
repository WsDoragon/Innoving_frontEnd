import React from "react";
import { Grid, Button, Link, Spacer } from "@nextui-org/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Componente1 from "../components/componente";

function Analista() {
    const navigate = useNavigate();

    const [showResults, setShowResults] = React.useState(false)
    const [showResults2, setShowResults2] = React.useState(false)
    const [showResults3, setShowResults3] = React.useState(false)

    useEffect(() => {
        navigate("./indicadores");
      }, []);
    

    const onClick = () => {
        if (showResults) {
            setShowResults(true)
        }
        else {
            setShowResults3(false)
            setShowResults2(false)
            setShowResults(true)
        }
    }

    const onClick2 = () => {
        if (showResults2) {
            setShowResults2(true)
        }
        else {
            setShowResults3(false)
            setShowResults2(true)
            setShowResults(false)
        }
    }
    const onClick3 = () => {
        if (showResults3) {
            setShowResults3(true)
        }
        else {
            setShowResults3(true)
            setShowResults2(false)
            setShowResults(false)
        }
    }

    /*
    return(
        
        <Grid.Container gap={2} justify="center">
            <Header/>
            <Grid xs={12}>
                    <Button onClick={onClick} auto flat as={Link}  href="#"> Indicadores </Button>
                    <Spacer y={0.5} />
                    <Button onClick={onClick2} auto flat as={Link} href="#">Evidencias</Button>
                    <Spacer y={0.5} />
                    <Button onClick={onClick3} auto flat as={Link} href="#">Provedores</Button>
            </Grid>

            {  showResults ? <Componente1 /> : null }
            {  showResults2 ? <Componente1 /> : null }
            {  showResults3 ? <Componente1 /> : null }

        </Grid.Container>
    );

    */

    return (
        <>
        <Header />
<Grid.Container  gap={2} justify="center">
            
            <Grid xs={12}>
            <Button onPress={() => navigate("./indicadores")} auto flat as={Link} href="#"> Indicadores </Button>
            <Spacer y={0.5} />
            <Button onPress={() => navigate("./evidencias")} auto flat as={Link} href="#">Evidencias</Button>
            <Spacer y={0.5} />
            <Button onPress={() => navigate("./proveedores")} auto flat as={Link} href="#">Provedores</Button>
            </Grid>
            </Grid.Container>
            <Outlet />
            

        </>

    );
}

export default Analista;