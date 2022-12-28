import {Button, Spacer, Input, Image, Grid, Dropdown, Row, Modal, Text, FormElement, useModal } from "@nextui-org/react";
import React, { Component, useState } from "react";
import { Selection } from '@react-types/shared/src/selection';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";
import InputText from "../../components/Gestion_usuario/InputText";
import InputFecha from "../../components/Gestion_usuario/InputFecha";


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




function Page3 () {
  const volver = useNavigate();
  const { setVisible, bindings } = useModal();

  const [state, setState] = useState<UserType>({
    nombre: "",
    apellido: "",
    contraseña: "",
    correo: "",
    rut: "",
    roles: []
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement,  MouseEvent>) => {
    console.log("xd")
    /*axios.post('http://170.187.160.109:3001/users/create', state).then(
      response => {
        console.log("Usuario creado "+ response.data);
        
        if(response.status === 400){
          console.log("ya existe")
        }

        axios.post(`http://170.187.160.109:3001/r_u/add`, {id: state.rut, roles: state.roles}).then(
          res => {
            console.log("Roles asignados "+res.data)
        });
    }).catch(function(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }});
    console.log('handleClick 👉️', state);
    delay(3000)
    volver(-1)*/
  }; 
  return(
    <div>
      <Spacer y={1} />
      <InputText></InputText>
      <InputFecha></InputFecha>

      <Spacer x={1} />
      
      <Grid.Container justify="center">
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
  )}

export default Page3;