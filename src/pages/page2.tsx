import React from "react";
import { Button, Spacer, Grid } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "./test_pages/Header_test";
import Barrita from '../components/barrita'
import Btn1 from '../components/btn1'
import {Fragment} from 'react';
import { Collapse, Text } from "@nextui-org/react";

function Analista(){
    const navigate = useNavigate();
    return(
        
        <Collapse.Group>
            <Grid.Container gap={1}>
                <Collapse title="Option A">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
           
                <Collapse title="Option B">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
            </Grid.Container> 
    </Collapse.Group>
    );
}

export default Analista;