
import { Button, Grid, Row, Spacer } from "@nextui-org/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Gestion_usuario/Header";

function Proveedor(){
    const navigate = useNavigate();
    const style = {marginLeft: 20}
    return(
        <div style={style}>
        <Spacer y = {0.5} />
        <Row>
                
                <Button onPress={() => navigate("./subirArchivos")} auto flat as={Link} href="#"> Subir archivos </Button>
                <Spacer y = {0.5} />
                <Button onPress={() => navigate("./subirPublicacion")} auto flat as={Link} href="#"> Subir publicación </Button>
        </Row>
        <Spacer x = {0.5} />
        <Outlet />
        </div >
        
    );
}

export default Proveedor;