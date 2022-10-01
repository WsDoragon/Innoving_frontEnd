import { createTheme,Navbar, Button, Link, Text } from "@nextui-org/react";
import { Image, useTheme } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  type: "dark"
})

const Header: React.FC = () => {
  const {isDark} = useTheme();
  const navigate = useNavigate();
  return (
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Image
            width={120}
            src="https://github.com/WsDoragon/Gestion_usuario_2.0/blob/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/logoA2.png?raw=true"
            alt="Default Image"
            objectFit="cover"
          />
          <Image
            width={120}
            src="https://github.com/WsDoragon/Gestion_usuario_2.0/blob/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/FCIB.png?raw=true"
            alt="Default Image"
            objectFit="cover"
          />
        </Navbar.Brand>
        <Navbar.Content variant="underline" hideIn="xs">
          <Navbar.Link href="#">Gerente</Navbar.Link>
          <Navbar.Link isActive href="#">Administrador</Navbar.Link>
          <Navbar.Link href="#">Analista</Navbar.Link>
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