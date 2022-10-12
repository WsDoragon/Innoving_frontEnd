import React from "react";
import { Grid, Button, Link, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Componente1 from "../components/componente";

function Proveedor(){
    const navigate = useNavigate();
    
    return(
        <Grid.Container gap={2} justify="center">
            <Header/>
            <Grid xs={12}>
                <div>
                    Hola mundo soy un proveedor
                </div>
            </Grid>

        </Grid.Container>
    );
}

export default Proveedor;