import React, { Component } from "react";
import { Grid, Button, Link} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "./test_pages/Header_test";

import Componente1 from "./test_pages/componente";
import Formulario from "./formo";
import TablaUser from "../components/tabla";

function Administrador(){
    const navigate = useNavigate();
    
    const [showResults, setShowResults] = React.useState(false)
    
    const onClick = () => {
        if (showResults) {
        setShowResults(false)
        }
        else{
            setShowResults(true)
        } 
    }

    return(
        <Grid.Container gap={2} justify="center">

            <Grid xs={12}>
                <Button onClick={onClick} auto flat as={Link} href="#"> Usuarios </Button>
            </Grid>

            {  showResults ? <TablaUser /> : null }

        </Grid.Container>
    );
}

export default Administrador;