import React from "react";
import { Button, Spacer, Input, Grid, Card, Text, Checkbox } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "./test_pages/Header_test";
import Barrita from '../components/barrita'
import Btn1 from '../components/btn1'

import {Fragment} from 'react';

function Gerente(){
    const navigate = useNavigate();
    return(
        <Grid.Container gap={2} justify="center">
            <Header/>
            <Fragment>
                <Grid.Container gap={1}>
                <Btn1 text='Indicadores'></Btn1>
                <Btn1 text='Solicitudes'></Btn1>   
                </Grid.Container>
            </Fragment>
        </Grid.Container>
    );
}

export default Gerente;