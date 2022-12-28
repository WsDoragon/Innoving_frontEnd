import axios from 'axios';
import { Table, Row, Col, Tooltip, User, Text, Button, Link, Spacer, Modal, useModal } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, Dispatch, SetStateAction, MutableRefObject } from 'react'


export type PropsMe = {
    mensaje: string
    active: boolean
    consulta: string
    state:any,
    callback: Function
}

async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

export default function ModalAbstracto(configmodal:any) {

    function refreshPage() {
      window.location.reload();
    }

    const volver = useNavigate();
    const { setVisible, bindings } = useModal();

    useEffect(() => {
      setVisible(true)
      console.log(configmodal.configmodal)
    }, []);

    const create = () => {
        axios.post('http://170.187.160.109:3001/users/create', configmodal.configmodal.state).then(
          response => {
            console.log("Usuario creado "+ response.data);
            
            if(response.status === 400){
              console.log("ya existe")
            }
  
            axios.post(`http://170.187.160.109:3001/r_u/add`, {id: configmodal.configmodal.state.rut, roles: configmodal.configmodal.state.roles}).then(
              res => {
                console.log("Roles asignados "+res.data)
            });
        }).catch(function(error){
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }});
        console.log('handleClick 👉️', configmodal.configmodal.state);
        delay(3000)
        setVisible(false)
        volver(-1)
      }; 

      const desactivar = () => {  
        
        //setVisible(false)
        
        axios.put(`http://170.187.160.109:3001/users/disable`, {rut:configmodal.configmodal.state}).then(
          res => {
            configmodal.configmodal.callback({rut:configmodal.configmodal.state, enabled: false, continua: true});
          })
        //refreshPage()
      }
    
      const activar = () => {
        //configmodal.configmodal.callback();
        //setVisible(false)
        
        axios.put(`http://170.187.160.109:3001/users/enable`, {rut:configmodal.configmodal.state}).then(
          res => {
            configmodal.configmodal.callback({rut: configmodal.configmodal.state, enabled: true, continua:true});
          })
      }
    
      const selector = () => {
        switch(configmodal.configmodal.consulta){

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
            default:
              setVisible(false)
              configmodal.configmodal.callback({continua:true});
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
              {configmodal.configmodal.mensaje}
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto onClick={() => {selector(); setVisible(false)}}>
              Si
            </Button>
            <Button auto flat color="error" onClick={() => {setVisible(false); configmodal.configmodal.callback({continua:false});}}>
              No
            </Button>                
          </Modal.Footer>
        </Modal>
    )
    
}