import { createTheme,Navbar, Button, Link, Spacer } from "@nextui-org/react";
import { Image, useTheme } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Administrador from "../administrador";
import Analista from "../analista";
import Gerente from "../gerente";



const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
      <Navbar variant="sticky" css={{backgroundColor: "black"}}>
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
          <Navbar.Link  onClick={() => navigate("/gerente")} href="#">Gerente</Navbar.Link>
          <Navbar.Link onClick={() => navigate("/administrador")} href="#">Administrador</Navbar.Link>
          <Navbar.Link onClick={() => navigate("/analista")} href="#">Analista</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Button onClick={() => {navigate("/")}} auto flat as={Link} href="#">
            Cerrar sesión
          </Button>
        </Navbar.Content>
      </Navbar>
      
  )
}

export default Header