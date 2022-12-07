import axios from 'axios';
import React from "react";

//@ts-ignore
import { Table, Row, Col, Tooltip, User, Text, Button, Link, Spacer, Modal, useModal, Grid, Badge } from "@nextui-org/react";
import algo from './Axiostabla';
import { IconButton } from "../../styledIcons/IconButton";
import { EyeIcon } from "../../styledIcons/EyeIcon";
import { EditIcon } from "../../styledIcons/EditIcon";
import { DeleteIcon } from "../../styledIcons/DeleteIcon";
import Formulario from "./formuCreateInnoving";
import { json, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import ModalDisable from './modalDisable';
import ModalAbstracto, { PropsMe } from './modal/modalAbstracto';

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


export default function TestTabla() {
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
    const todo = await axios.get("http://localhost:3001/users/allInnov");
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
    setDatos({mensaje: dataMensaje, active:true, consulta:dataConsulta, state: dataState, callback: (data: any) => {
      setShowResults3(false);
      console.log(data)
      if (data.continua){
        let users = JSON.parse(JSON.stringify(users23));
        let index = users.findIndex((user: any) => user.rut == data.rut);
        if (index != undefined) {
          users[index].status = data.enabled ? 1 : 0;
      }
      setUsers23(users);}
    }})
    setShowResults3(true)
  }

  

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log("============== component updated ================")
    console.log(users23);
  }, [users23]);

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

  const activos = async () =>{
    //const todoActivo = await axios.get("http://localhost:3001/users/allEnabled");
    const todoActivo = await axios.get("http://localhost:3001/users/allInnov").then((result) =>{
      let users: UserType[] = []
      for (let i of result.data.data){
        //console.log(i)
        if (i.status != 0){
          users.push(i);
        }
      }
      console.log(users)
      setUsers23(users);
  });

    console.log("hola: ", todoActivo);

    //setUsers23(todoActivo.data.data);
  }

  const Inactivos = async () =>{
    const todoActivo = await axios.get("http://localhost:3001/users/allInnov").then((result) =>{
      let users: UserType[] = []
      for (let i of result.data.data){
        //console.log(i)
        if (i.status != 1){
          users.push(i);
        }
      }
      console.log(users)
      setUsers23(users);
  });
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
          key:"status",
          label: "Estado"
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
      <div style={{marginRight:40, marginLeft:20}}>
        <Row>
          <Button 
          onClick={() => {navigate("/formulario")}} as={Link} href="#" 
          css={{right:"20px"}}
          >Crear nuevo usuario</Button>
          
          <Button onClick={() => {activos()}}>Activos</Button>

          <Button 
          onClick={() => {Inactivos()}}
          style={{marginLeft:20}}>Inactivos</Button>
        </Row>
          <Spacer y={0.5} ></Spacer>  
        
          <Table
          bordered
          shadow={true}
          selectionMode="single"

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
              <Table.Cell>{item[`status`] ? <Badge color="success" variant="flat">Activo</Badge> : <Badge color="error" variant="flat">Inactivo</Badge>}</Table.Cell>
              <Table.Cell> 
                  <Row justify="center" align="center">
                  
                  
                  <Tooltip content="Editar Usuario">
                      <Button onClick={() => {navigate(`/editarUser/${item.rut}`,{state:{rut:item.rut}})}} href="#">
                        Editar
                      {/*<EditIcon size={20} fill="#979797" />*/}
                      </Button>
                  </Tooltip>
                  
                  <Spacer x={0.5}/>
                  
                  {item.status ?
                    <Tooltip
                      content="Desactivar usuario"
                      
                      onClick={() => {console.log("Desactivar usuario", item.rut)}}
                  >
                      
                        <Button onClick={() => {handler3(`¿Está seguro de que quiere desactivar al usuario ${item.rut}?`,
                                                "desactivar",item.rut);console.log(item);}} color={"error"}>
                          Desactivar
                      </Button>

                    </Tooltip>

                    :
                    
                    <Tooltip
                      content="Activar usuario"
                      
                      onClick={() => {console.log("Activar usuario", item.rut); item.status=1}}
                  >
                      
                        <Button onClick={() => {handler3(`¿Está seguro de que quiere activar al usuario ${item.rut}?`,
                                                "activar",item.rut);console.log(item)}} color={"success"}>
                          Activar
                      </Button>

                    </Tooltip>}


                  
              </Row></Table.Cell>      
            </Table.Row>
          )}
        </Table.Body>
        
          </Table>

          {/*<ModalDisable toDisable = {disableUser}/>*/}

          {showResults3 && <ModalAbstracto configmodal = {datos}/>}
          
          
        </div>
)}