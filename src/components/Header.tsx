import { Text ,Navbar, Button, Link, Spacer } from "@nextui-org/react";
import { Image} from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  let gerenteb = false;
  let administradorb = true;
  let analistab = true;
  
  if ( !(gerenteb && administradorb && analistab )) {
    let generico = true;
  }
  
  return (
      <Navbar variant="static" css={{$$navbarBackgroundColor: '#000000', $$navbarTextColor: '#ffffff'}} disableBlur maxWidth="fluid">
        <Navbar.Brand>
          <Image
            width={120}
            src="https://github.com/WsDoragon/Gestion_usuario_2.0/blob/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/inniving_logo.svg?raw=true"
            alt="Default Image"
            objectFit="cover"
          />
           <Spacer y={0.5} />
          <Image
            width={120}
            src="https://github.com/WsDoragon/Gestion_usuario_2.0/blob/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/FCIB.png?raw=true"
            alt="Default Image"
            objectFit="cover"
          />
        </Navbar.Brand>
        <Navbar.Content variant="underline" hideIn="xs">

        { gerenteb ? <Navbar.Link  onClick={() => navigate("/gerente")} href="#">Gerente</Navbar.Link> : null}
        { administradorb ? <Navbar.Link onClick={() => navigate("/administrador")} href="#">Administrador</Navbar.Link> : null }
        { analistab ? <Navbar.Link onClick={() => navigate("/analista")} href="#">Analista</Navbar.Link> : null }    
           
        </Navbar.Content>
        <Navbar.Content>
          <Button onClick={() => {navigate("/")}} auto flat as={Link} href="#" css ={{background:"#FFA859"}}>
            <Text color='#000000'>Cerrar sesión</Text>
          </Button>
        </Navbar.Content>
      </Navbar>
      
  )
}

export default Header