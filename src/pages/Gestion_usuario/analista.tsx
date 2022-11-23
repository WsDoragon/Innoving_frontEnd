import { Grid, Button, Link, Spacer } from "@nextui-org/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Gestion_usuario/Header";


function Analista() {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("./indicadores");
      }, []);

    return (
        <>
        
        <Grid.Container  gap={2} justify="center">
            <Grid xs={12}>
                <Button onPress={() => navigate("./indicadores")} auto flat as={Link} href="#"> Indicadores </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./proveedores")} auto flat as={Link} href="#"> Metas </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./proveedores")} auto flat as={Link} href="#"> Métricas </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./evidencias")} auto flat as={Link} href="#"> Evidencias </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./proveedores")} auto flat as={Link} href="#"> Provedores </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./prueba")} auto flat as={Link} href="#"> Analisis Indicadores </Button>
            </Grid>
        </Grid.Container>
        <Outlet />
        </>
    );
}

export default Analista;