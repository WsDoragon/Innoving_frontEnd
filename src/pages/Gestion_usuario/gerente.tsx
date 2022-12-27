import { useEffect } from "react";
import { Grid, Button, Link, Spacer, Row} from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Gestion_usuario/Header";


function Gerente(){
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("./visualizacion");
      }, []);

    const style = {marginLeft: 20}

    return(
        <div style={style}>
        <Spacer y = {0.5} />
        <Row>
                <Button onPress={() => navigate("./visualizacion")} auto flat as={Link} href="#"> Visualizacion de resultados </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./solicitudes_indicadores")} auto flat as={Link} href="#"> Solicitud de indicadores </Button>
                <Spacer y={0.5} />
                <Button onPress={() => navigate("./historial_peticiones")} auto flat as={Link} href="#"> Historial peticiones </Button>

            
        </Row>
        <Spacer x = {0.5} />
        <Outlet />
        </div >
        
    );
}

export default Gerente;