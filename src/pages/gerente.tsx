import React from "react";
import { Grid, Button, Link, Spacer} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Componente1 from "../components/componente";
import Formulario from "../components/formo";

function Gerente(){
    const navigate = useNavigate();
    
    const [showResults, setShowResults] = React.useState(false)
    const [showResults2, setShowResults2] = React.useState(false)
    
    const onClick = () => {
        if (showResults) {
        setShowResults(true)
        }
        else{
            setShowResults(true)
            setShowResults2(false)
        } 
    }

    const onClick2 = () => {
        if (showResults2) {
        setShowResults2(true)
        }
        else{
            setShowResults2(true)
            setShowResults(false)
        } 
    }

    return(
        <Grid.Container  gap={2} justify="center">
            <Header/>

            <Grid xs={12}>
                <Button onClick={onClick} auto flat as={Link} href="#"> Indicadores </Button>
                <Spacer y={0.5} />
                <Button onClick={onClick2} auto flat as={Link} href="#">Solicitudes de indicadores</Button>
            </Grid>

            {  showResults ? <Componente1 /> : null }
            {  showResults2 ? <Componente1 /> : null }

        </Grid.Container>
    );
}

export default Gerente;