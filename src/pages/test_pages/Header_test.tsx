import { createTheme,Navbar, Button, Link, Text } from "@nextui-org/react";
import { Image, useTheme } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Administrador from "../administrador";
import Analista from "../analista";
import Gerente from "../gerente";

const theme = createTheme({
  type: "dark"
})



const Header: React.FC = () => {
  const {isDark} = useTheme();
  const navigate = useNavigate();
  const [showResults, setShowResults] = React.useState(false)
  const [showResults2, setShowResults2] = React.useState(false)
  const [showResults3, setShowResults3] = React.useState(false)
  
  const onClick = () => {
      if (showResults) {
      setShowResults(false)
      }
      else{
          setShowResults3(false)
          setShowResults2(false)
          setShowResults(true)
      } 
  }

  const onClick2 = () => {
      if (showResults2) {
      setShowResults2(false)
      }
      else{
          setShowResults3(false)
          setShowResults2(true)
          setShowResults(false)
      } 
  }
  const onClick3 = () => {
      if (showResults3) {
      setShowResults3(false)
      }
      else{
          setShowResults3(true)
          setShowResults2(false)
          setShowResults(false)
      } 
  }


  return (
    <>
      <Navbar variant="sticky" css={{backgroundColor: "rgba(122,0,122, 1)",}}>
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
          <Navbar.Link  onClick={onClick} href="#">Gerente</Navbar.Link>
          <Navbar.Link onClick={onClick2} href="#">Administrador</Navbar.Link>
          <Navbar.Link onClick={onClick3} href="#">Analista</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Button onClick={() => {navigate("/")}} auto flat as={Link} href="#">
            Cerrar sesión
          </Button>
        </Navbar.Content>
      </Navbar>

      {  showResults ? <Gerente /> : null }
      {  showResults2 ? <Administrador /> : null }
      {  showResults3 ? <Analista /> : null }
      </>
      
  )
}

export default Header