import { useEffect } from "react";
import { Grid, Button, Link, Spacer} from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Gestion_usuario/Header";


function Gerente(){
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("./indicadores");
      }, []);

    return(
        <>
        <Header />
        <Grid.Container  gap={2} justify="center">
            <Grid xs={12}>
                <Button onPress={() => navigate("./indicadores")} auto flat as={Link} href="#"> Indicadores </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./solicitudes_indicadores")} auto flat as={Link} href="#"> Solicitud de indicadores </Button>
            </Grid>
        </Grid.Container>
        <Outlet />
        </>
    );
}

export default Gerente;