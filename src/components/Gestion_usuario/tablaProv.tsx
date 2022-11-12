import { Link, Button, Text} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function TablaProv() {
    const navigate = useNavigate();


    return (
        <Button  
        css={{left:"10px"}}
        onClick={() => {navigate("/formularioProv")}} as={Link} href="#" >Crear nuevo usuario</Button>
        
    );
}