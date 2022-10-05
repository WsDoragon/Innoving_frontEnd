import React from "react";
import { Grid, Button, Link} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TestTabla from "../components/testTabla";

function Administrador(){
    const navigate = useNavigate();
    
    const [showResults, setShowResults] = React.useState(false)
    
    const onClick = () => {
        if (showResults) {
        setShowResults(true)
        }
        else{
            setShowResults(true)
        } 
    }

    return(
        <Grid.Container gap={2} justify="center">
        <Header/>
            <Grid xs={12}>
                <Button onClick={onClick} auto flat as={Link} href="#"> Usuarios </Button>
            </Grid>

            {  showResults ? <TestTabla /> : null }

        </Grid.Container>
    );
}

export default Administrador;