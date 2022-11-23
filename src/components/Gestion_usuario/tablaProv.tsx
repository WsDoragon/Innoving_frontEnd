import axios from 'axios';
import React from "react";

//@ts-ignore
import { Table, Row, Col, Tooltip, User, Text, Button, Link, Spacer, Modal, useModal, Grid } from "@nextui-org/react";
import algo from './Axiostabla';
import { StyledBadge } from "../../styledIcons/StyledBadge";
import { IconButton } from "../../styledIcons/IconButton";
import { EyeIcon } from "../../styledIcons/EyeIcon";
import { EditIcon } from "../../styledIcons/EditIcon";
import { DeleteIcon } from "../../styledIcons/DeleteIcon";
import Formulario from "./formuCreateInnoving";
import { json, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import ModalDisable from './modalDisable';
import ModalAbstracto from './modal/modalAbstracto';

type UserType = {
    rut: string
    nombre: string
    apellido: string
    correo:string
    pass: string
    roles: any
    status: number
};

type GetUsersResponse = {
    data: UserType[];
  };

  type PropsMe = {
    mensaje: string
    active: boolean
    consulta: string
    state?:any
}

export default function TablaProv() {
  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);
///////////////////////////
  function refreshPage() {
    window.location.reload();
  }
  //PROBANDO
  const { setVisible, bindings } = useModal();

  const [datos, setDatos] = useState<PropsMe>();

  const [disableUser, setDisableUser] = useState<string>();
  /////////////////////////////////
  const [showResults1, setShowResults] = React.useState(false)
  const [showResults2, setShowResults2] = React.useState(false)
  const [showResults3, setShowResults3] = React.useState(false)
  ////////////////////////////////
  const [users23, setUsers23] = useState<UserType[]>([]);

  const getUsers = async () => {
    const todo = await axios.get("http://localhost:3001/users/allProv");
    console.log("hola: ", todo.data.data);
    setUsers23(todo.data.data);
  }

  const handler = (item: string) => {
    setVisible(true)
    setShowResults(true)
    setDisableUser(item)
  }

  const handler2 = (item: string) => {
    setVisible(true)
    setShowResults2(true)
    setDisableUser(item)
  }

  const handler3 = (dataMensaje:any, dataConsulta: any, dataState?: any) => {
    setDatos({mensaje: dataMensaje, active:true, consulta:dataConsulta, state: dataState})
    setShowResults3(true)
  }

  

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log("component updated")
  }, [showResults3]);

  const desactivar = () => {
    setVisible(false)
    
    axios.put(`http://localhost:3001/users/disable`, {rut:disableUser}).then(res => console.log("usuario desactivado "+res.data))
    refreshPage()
  }

  const activar = () => {
    setVisible(false)
    
    axios.put(`http://localhost:3001/users/enable`, {rut:disableUser}).then(res => {console.log("usuario desactivado "+res.data)})
    refreshPage()
  } 

  const rolesdeusuario = (roles:any) =>{
    let a = JSON.stringify(roles).replaceAll('"','').replaceAll('[', '').replaceAll(']','').replaceAll(',',' - ')
    return (a)

    
  }

  const navigate = useNavigate();
  const columns = [
        {
            key: "rut",
            label: "RUT",
        },
        {
          key: "nombre",
          label: "Nombre",
        },
        {
          key: "correo",
          label: "Correo",
        },
        {
          key:"roles",
          label: "Roles"
        },
        {
            key: "actions",
            label: "Actions"
        } 
    ];
    const columns2 = [
        { name: "NAME", uid: "nombre" },
        { name: "ROLE", uid: "correo" },
        { name: "STATUS", uid: "pass" },
        { name: "ACTIONS", uid: "rut" },
    ]

    return(
      <div>
        <Button  
        css={{left:"10px"}}
        onClick={() => {navigate("/formularioProv")}} as={Link} href="#" >Crear nuevo usuario</Button>
        
          <Table
          
          aria-label="Example table with dynamic content"
          css={{
            height: "auto",
            minWidth: "100%"
            
          }}
      >
          <Table.Header columns={columns}>
          {(column) => (
            <Table.Column 
              key={column.key}
              hideHeader={column.key === "actions"}
              align={column.key === "actions" ? "center" : "start"}
              >
                  {column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users23}>
          {(item) => (
            <Table.Row key={item.rut}>
              <Table.Cell><Text b size={14}>{item[`rut`]} </Text></Table.Cell>
              <Table.Cell><Text b size={14}>{item[`nombre`]} {item[`apellido`]}</Text></Table.Cell>
              <Table.Cell><Text b size={14}>{item[`correo`]}</Text></Table.Cell>
              <Table.Cell><Text b size={14}>{rolesdeusuario(item[`roles`])}</Text></Table.Cell>
              <Table.Cell> 
                  <Row justify="center" align="center">
                  
                  <Col css={{ d: "flex" }}>
                  <Tooltip content="Editar Usuario">
                      <Button onClick={() => {navigate(`/editarProv/${item.rut}`,{state:{rut:item.rut}})}} as={Link} href="#">
                        Editar
                      {/*<EditIcon size={20} fill="#979797" />*/}
                      </Button>
                  </Tooltip>
                  </Col>
                  <Spacer x={0.5}/>
                  <Col css={{ d: "flex" }}>
                  {item.status == 1 &&
                    <Tooltip
                      content="Desactivar usuario"
                      
                      onClick={() => {console.log("Desactivar usuario", item.rut)}}
                  >
                      
                        <Button onClick={() => {item.status=0; handler3(`¿Está seguro de que quiere desactivar al usuario ${item.rut}?`,
                                                "desactivar",item.rut);console.log(item); navigate("../usuarios_innoving")}} color={"error"}>
                          Desactivar
                      </Button>

                    </Tooltip>}

                    {item.status == 0 &&
                    <Tooltip
                      content="Activar usuario"
                      
                      onClick={() => {console.log("Activar usuario", item.rut); item.status=1}}
                  >
                      
                        <Button onClick={() => {item.status=1; handler3(`¿Está seguro de que quiere activar al usuario ${item.rut}?`,
                                                "activar",item.rut);console.log(item)}} color={"success"}>
                          Activar
                      </Button>

                    </Tooltip>}


                  </Col>
              </Row></Table.Cell>      
            </Table.Row>
          )}
        </Table.Body>
          </Table>

          {/*<ModalDisable toDisable = {disableUser}/>*/}

          {showResults3 && <ModalAbstracto configmodal = {datos}/>}
          
          {showResults1 &&
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
              ¿Está seguro de que quiere desactivar al usuario {disableUser}?
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto onClick={() => {desactivar();setVisible(false)}}>
              Si
            </Button>
            <Button auto flat color="error" onClick={() => {setVisible(false)}}>
              No
            </Button>                
          </Modal.Footer>
          </Modal>}
          {showResults2 &&
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
              ¿Está seguro de que quiere activar al usuario {disableUser}?
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto onClick={() => {activar();setVisible(false)}}>
              Si
            </Button>
            <Button auto flat color="error" onClick={() => {setVisible(false)}}>
              No
            </Button>                
          </Modal.Footer>
          </Modal>}
        </div>
)}
