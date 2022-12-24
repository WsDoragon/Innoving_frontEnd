import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Modal, useModal,FormElement ,Button, Spacer, Input, Grid, Text, Checkbox } from "@nextui-org/react";
import Header from "./Header";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

type UserType = {
  rut: string
  nombre: string
  apellido: string
  correo:string
  contraseña: string
  roles: number[]
};

async function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

function Formulario() {
    const volver = useNavigate();
    const { setVisible, bindings } = useModal();
    const rol_tags = ["gerente", "administrador", "analista"];
    const [selected, setSelected] = useState<string[]>([]);
    const [state, setState] = useState<UserType>({
        nombre: "",
        apellido: "",
        contraseña: "",
        correo: "",
        rut: "",
        roles: []
      });
      

    function handleChange(e: React.ChangeEvent<FormElement>) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value,
        });
      }

      const handleCheckbox = (e: string[]) => {
        console.log(e);
        let newRolTags : number[] = [];
        for (let i of e){
          newRolTags.push(1+rol_tags.indexOf(i));
        }
        setState((state) => {
          return({
            ...state,
            roles: newRolTags
          });
        });
        setSelected(e);
      }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement,  MouseEvent>) => {
      axios.post('http://localhost:3001/users/create', state).then(
        response => {
          console.log("Usuario creado "+ response.data);
          
          if(response.status === 409){
            console.log("ya existe")
          }
          else{
            axios.post(`http://localhost:3001/r_u/add`, {id: state.rut, roles: state.roles}).then(
              res => {
                console.log("Roles asignados "+ res.data)
                console.log('handleClick 👉️', state);
                delay(3000)
                volver(-1)
            });
          }
      }).catch(function(error){
        if (error.response) {
          
            console.log(error.response)
            toast.error(error.response.data.error, {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          

      }});
      setVisible(false)
    }; 
     
    return (
      <div>
      <Header/>
      <ToastContainer/>
      <Spacer y={1} />
        <Grid.Container justify="center">
            <Input width="50%" placeholder="Nombre(s)" type="text" name="nombre" onChange={handleChange} value={state.nombre}/>
            <Spacer y={3} />

            <Input width="50%" placeholder="Apellido(s)" type="text" name="apellido" onChange={handleChange} value={state.apellido}/>
            <Spacer y={3} />

            <Input width="50%" placeholder="Correo" type="text" name="correo" onChange={handleChange} value={state.correo}/>
            <Spacer y={3} />

            <Input width="50%" placeholder="RUT" type="text" name="rut" onChange={handleChange} value={state.rut}/>
            <Spacer y={3} />
            

        <Grid.Container justify="center">
            <Checkbox.Group
                label="Roles"
                orientation="horizontal"
                color="primary"
                value={selected}
                onChange={handleCheckbox}
                >
                <Checkbox value="gerente">Gerente</Checkbox>
                <Checkbox value="administrador">Administrador</Checkbox>
                <Checkbox value="analista">Analista</Checkbox>
            </Checkbox.Group>
            <Spacer y={4}/>

            </Grid.Container>
            <Button onClick={() => setVisible(true)} >Guardar</Button>
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
                  ¿Seguro que quiere guardar este usuario?
                  </Text>
              </Modal.Body>
              <Modal.Footer>
                <Button auto onClick={handleClick}>
                  Si
                </Button>
                <Button auto flat color="error" onClick={() => setVisible(false)}>
                  No
                </Button>
              </Modal.Footer>
            </Modal>

            <Spacer x={0.5} />

            <Button onClick={() => {volver(-1)}} color="error" >Salir</Button> 
        </Grid.Container>
        </div>
    );
  }

export default Formulario