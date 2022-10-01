import React from "react";
import { Button, Spacer, Input, Grid, Card, Text, Checkbox } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "./test_pages/Header_test";

function Gerente(){
    const navigate = useNavigate();
    return(
        <Grid.Container gap={2} justify="center">
            <Header/>
            <div>
                Gerente
                <Button onClick={() => {navigate("/")}} >Home</Button>
            </div>
        </Grid.Container>
    );
}

export default Gerente;