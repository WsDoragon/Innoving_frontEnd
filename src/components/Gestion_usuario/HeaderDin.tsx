import { Text ,Navbar, Button, Link, Spacer, Modal, useModal } from "@nextui-org/react";
import { Image} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Outlet,useNavigate } from "react-router-dom";

const HeaderDin: React.FC = () => {
  const { setVisible, bindings } = useModal();
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(1);
  let gerenteb = sessionStorage.rol.includes("Gerente");
  let administradorb = sessionStorage.rol.includes("Administrador");
  let analistab = sessionStorage.rol.includes("Analista");
  let proveedorb = sessionStorage.rol.includes("Proveedor");

  useEffect(() => {
    if(sessionStorage.autorizado != "false"){
      sessionStorage.setItem("autorizado", "false")
      console.log(sessionStorage.rol[0])
      navigate(`./${JSON.parse(sessionStorage.rol)[0]}`)
    }
  }, []);

 
    if (count===0){
        return (
            <>
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
                  { gerenteb ? <Navbar.Link isActive onClick={()=>
                    {
                      setCount(0)
                      navigate("/home/gerente")
                    }} href="#">Gerente</Navbar.Link> : null}
                  { administradorb? <Navbar.Link  onClick={()=>
                    {
                      setCount(1)
                      navigate("/home/administrador")
                    }} href="#">Administrador</Navbar.Link> : null }
                  { analistab ? <Navbar.Link  onClick={()=>
                    {
                      setCount(2)
                      navigate("/home/analista")
                    }} href="#">Analista</Navbar.Link> : null }  
                  { proveedorb ? <Navbar.Link  onClick={()=>
                    {
                      setCount(3)
                      navigate("/home/proveedor")
                    }} href="#">Proveedor</Navbar.Link> : null }
                  </Navbar.Content>
                  <Navbar.Content>
                    <Button onClick={() => setVisible(true)} auto flat as={Link} href="#" css ={{background:"#FFA859"}}>
                      <Text color='#000000'>Cerrar sesión</Text>
                    </Button>
                  </Navbar.Content>
          
                  <Modal
                    scroll
                    width="300px"
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
                      <Button auto onClick={() => {setVisible(true); sessionStorage.clear(); navigate("/")}}>
                        Si
                      </Button>
                      <Button auto flat color="error" onClick={() => setVisible(false)}>
                        No
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  
                </Navbar>
          
          
                <Outlet />
                </>
            )
    }
    else if (count===1){
        return (
            <>
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
                  { gerenteb ? <Navbar.Link  onClick={()=>
                    {
                      setCount(0)
                      navigate("/home/gerente")
                    }} href="#">Gerente</Navbar.Link> : null}
                  { administradorb? <Navbar.Link isActive onClick={()=>
                    {
                      setCount(1)
                      navigate("/home/administrador")
                    }} href="#">Administrador</Navbar.Link> : null }
                  { analistab ? <Navbar.Link  onClick={()=>
                    {
                      setCount(2)
                      navigate("/home/analista")
                    }} href="#">Analista</Navbar.Link> : null }  
                  { proveedorb ? <Navbar.Link  onClick={()=>
                    {
                      setCount(3)
                      navigate("/home/proveedor")
                    }} href="#">Proveedor</Navbar.Link> : null }
                  </Navbar.Content>
                  <Navbar.Content>
                    <Button onClick={() => setVisible(true)} auto flat as={Link} href="#" css ={{background:"#FFA859"}}>
                      <Text color='#000000'>Cerrar sesión</Text>
                    </Button>
                  </Navbar.Content>
          
                  <Modal
                    scroll
                    width="300px"
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
                      <Button auto onClick={() => {setVisible(true); sessionStorage.clear(); navigate("/")}}>
                        Si
                      </Button>
                      <Button auto flat color="error" onClick={() => setVisible(false)}>
                        No
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  
                </Navbar>
          
          
                <Outlet />
                </>
            )
    }

    else if (count===2){
      return (
          <>
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
                { gerenteb ? <Navbar.Link  onClick={()=>
                  {
                    setCount(0)
                    navigate("/home/gerente")
                  }} href="#">Gerente</Navbar.Link> : null}
                { administradorb? <Navbar.Link  onClick={()=>
                  {
                    setCount(1)
                    navigate("/home/administrador")
                  }} href="#">Administrador</Navbar.Link> : null }
                { analistab ? <Navbar.Link isActive onClick={()=>
                  {
                    setCount(2)
                    navigate("/home/analista")
                  }} href="#">Analista</Navbar.Link> : null }  
                { proveedorb ? <Navbar.Link  onClick={()=>
                  {
                    setCount(3)
                    navigate("/home/proveedor")
                  }} href="#">Proveedor</Navbar.Link> : null }
                </Navbar.Content>
                <Navbar.Content>
                  <Button onClick={() => setVisible(true)} auto flat as={Link} href="#" css ={{background:"#FFA859"}}>
                    <Text color='#000000'>Cerrar sesión</Text>
                  </Button>
                </Navbar.Content>
        
                <Modal
                  scroll
                  width="300px"
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
                    <Button auto onClick={() => {setVisible(true); sessionStorage.clear(); navigate("/")}}>
                      Si
                    </Button>
                    <Button auto flat color="error" onClick={() => setVisible(false)}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>
                
              </Navbar>
        
        
              <Outlet />
              </>
          )
  }

    else if (count===3){
        return (
            <>
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
                  { gerenteb ? <Navbar.Link  onClick={()=>
                    {
                      setCount(0)
                      navigate("/home/gerente")
                    }} href="#">Gerente</Navbar.Link> : null}
                  { administradorb? <Navbar.Link  onClick={()=>
                    {
                      setCount(1)
                      navigate("/home/administrador")
                    }} href="#">Administrador</Navbar.Link> : null }
                  { analistab ? <Navbar.Link  onClick={()=>
                    {
                      setCount(2)
                      navigate("/home/analista")
                    }} href="#">Analista</Navbar.Link> : null }  
                  { proveedorb ? <Navbar.Link isActive onClick={()=>
                    {
                      setCount(3)
                      navigate("/home/proveedor")
                    }} href="#">Proveedor</Navbar.Link> : null }
                  </Navbar.Content>
                  <Navbar.Content>
                    <Button onClick={() => setVisible(true)} auto flat as={Link} href="#" css ={{background:"#FFA859"}}>
                      <Text color='#000000'>Cerrar sesión</Text>
                    </Button>
                  </Navbar.Content>
          
                  <Modal
                    scroll
                    width="300px"
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
                      <Button auto onClick={() => {setVisible(true); sessionStorage.clear(); navigate("/")}}>
                        Si
                      </Button>
                      <Button auto flat color="error" onClick={() => setVisible(false)}>
                        No
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  
                </Navbar>
          
          
                <Outlet />
                </>
            )
    }
    else{
        return (
            <>
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
                  { gerenteb ? <Navbar.Link  onClick={()=>
                    {
                      setCount(0)
                      navigate("/home/gerente")
                    }} href="#">Gerente</Navbar.Link> : null}
                  { administradorb? <Navbar.Link  onClick={()=>
                    {
                      setCount(1)
                      navigate("/home/administrador")
                    }} href="#">Administrador</Navbar.Link> : null }
                  { analistab ? <Navbar.Link  onClick={()=>
                    {
                      setCount(2)
                      navigate("/home/analista")
                    }} href="#">Analista</Navbar.Link> : null }  
                  { proveedorb ? <Navbar.Link  onClick={()=>
                    {
                      setCount(3)
                      navigate("/home/proveedor")
                    }} href="#">Proveedor</Navbar.Link> : null }
                  </Navbar.Content>
                  <Navbar.Content>
                    <Button onClick={() => setVisible(true)} auto flat as={Link} href="#" css ={{background:"#FFA859"}}>
                      <Text color='#000000'>Cerrar sesión</Text>
                    </Button>
                  </Navbar.Content>
          
                  <Modal
                    scroll
                    width="300px"
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
                      <Button auto onClick={() => {setVisible(true); sessionStorage.clear(); navigate("/")}}>
                        Si
                      </Button>
                      <Button auto flat color="error" onClick={() => setVisible(false)}>
                        No
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  
                </Navbar>
          
          
                <Outlet />
                </>
            )
    }
  
}

export default HeaderDin