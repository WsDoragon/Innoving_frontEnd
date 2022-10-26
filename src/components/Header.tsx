import { Text ,Navbar, Button, Link, Spacer, Modal, useModal } from "@nextui-org/react";
import { Image} from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { setVisible, bindings } = useModal();
  const navigate = useNavigate();
  let gerenteb = sessionStorage.rol.includes("Gerente");
  let administradorb = sessionStorage.rol.includes("Administrador");
  let analistab = sessionStorage.rol.includes("Analista");
  let proveedorb = sessionStorage.rol.includes("Proveedor");

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

        { gerenteb ? <Navbar.Link onClick={() => navigate("/gerente")} href="#">Gerente</Navbar.Link> : null}
        { administradorb? <Navbar.Link  onClick={() => {navigate("/administrador")} } href="#">Administrador</Navbar.Link> : null }
        { analistab ? <Navbar.Link  onClick={() => navigate("/analista")} href="#">Analista</Navbar.Link> : null }  
        { proveedorb ? <Navbar.Link  onClick={() => navigate("/proveedor")} href="#">Proveedor</Navbar.Link> : null }      
           
        </Navbar.Content>
        <Navbar.Content>
          <Button onClick={() => setVisible(true)} auto flat as={Link} href="#" css ={{background:"#FFA859"}}>
            <Text color='#000000'>Cerrar sesión</Text>
          </Button>
        </Navbar.Content>

        <Modal
          scroll
          width="600px"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Aviso
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text id="modal-description">
              ¿Cerrar sesión?
              </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto onClick={() => {setVisible(true); sessionStorage.removeItem('rol'); navigate("/")}}>
              Si
            </Button>
            <Button auto flat color="error" onClick={() => setVisible(false)}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
        
      </Navbar>


      
  )
}

export default Header