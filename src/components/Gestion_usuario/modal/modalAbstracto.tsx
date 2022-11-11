import axios from 'axios';
import { Table, Row, Col, Tooltip, User, Text, Button, Link, Spacer, Modal, useModal } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, Dispatch, SetStateAction, MutableRefObject } from 'react'


type PropsMe = {
    mensaje: string
    active: boolean
    consulta: string
    state:any
}

async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

export default function ModalAbstracto(configmodal:any) {

    const volver = useNavigate();
    const { setVisible, bindings } = useModal();

    const create = () => {
        axios.post('http://localhost:3001/users/create', configmodal.state).then(
          response => {
            console.log("Usuario creado "+ response.data);
            
            if(response.status === 400){
              console.log("ya existe")
            }
  
            axios.post(`http://localhost:3001/r_u/add`, {id: configmodal.state.rut, roles: configmodal.state.roles}).then(
              res => {
                console.log("Roles asignados "+res.data)
            });
        }).catch(function(error){
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }});
        console.log('handleClick 👉️', configmodal.state);
        delay(3000)
        setVisible(false)
        volver(-1)
      }; 

      const desactivar = () => {
        setVisible(false)
        
        axios.put(`http://localhost:3001/users/disable`, {rut:configmodal.state.changeActUser}).then(res => console.log("usuario desactivado "+res.data))
      }
    
      const activar = () => {
        setVisible(false)
        
        axios.put(`http://localhost:3001/users/enable`, {rut:configmodal.state.changeActUser}).then(res => console.log("usuario activado "+res.data))
      }
    
      const selector = () => {
        switch(configmodal.consulta){

            case "crear":
                console.log("accedido a crear")
                create();
                break;

            case "editar":
                console.log("accedido a editar");
                break;
            
            case "desactivar":
                console.log("accedido a desactivar");
                desactivar()
                break;
            
            case "activar":
                console.log("accedido a activar")
                activar()
                break;

        }
      }

    return(
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
              {configmodal.mensaje}
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto onClick={() => {selector(); setVisible(false)}}>
              Si
            </Button>
            <Button auto flat color="error" onClick={() => setVisible(false)}>
              No
            </Button>                
          </Modal.Footer>
        </Modal>
    )
    
}