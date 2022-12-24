import axios from 'axios';
import React from "react";

//@ts-ignore
import { Table, Row, Col, Tooltip, User, Text, Button, Link, Spacer, Modal, useModal, Grid, Badge, Radio } from "@nextui-org/react";
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


export default function TestTablaProv() {
  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);
///////////////////////////
  function refreshPage() {
    window.location.reload();
  }
  //PROBANDO

  const [datos, setDatos] = useState<PropsMe>();

  /////////////////////////////////

  const [showResults3, setShowResults3] = React.useState(false)
  ////////////////////////////////
  const [users23, setUsers23] = useState<UserType[]>([]); //Actualizan tabla
  const [users24, setUsers24] = useState<UserType[]>([]); //Almacena los usuarios
  
  const getUsers = async () => {
    const todo = await axios.get("http://localhost:3001/users/allProv").then((res) => {
      console.log("hola: ", res.data.data);
      setUsers24(res.data.data);
      console.log("24", users24)
    
      setUsers23(res.data.data)
      console.log("23", users23)
    });
    
  }


  // Desactivar o activar usuario, procesado en otro componente
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
  //////////

  //Barra busqueda

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if(searchQuery == ""){
      getUsers()
    }
    const filteredData = users24.filter(
      user => user.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setUsers23(filteredData);
  }, [searchQuery]);

  //

  // Seleccionar usuarios (Todos - Inactivos - Activos)

    //Radios control
    const [checked, setChecked] = React.useState('Todos');
  
    useEffect(() => {
      switch(checked) {
  
        case "Inactivos":
          Inactivos()
          return
  
        case "Activos":
          activos()
          return
  
        default:
          setUsers23(users24)
          return console.log("default")
      }
  
    },[checked])

  // on load page
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log("============== component updated ================")
    console.log(users23);
  }, [users23]);
  /////

  /* Se queda quieto esto, quizas y solo quizas pongo los roles
  en lo que es esta tabla (por estetica mas que nada) */
/*
  const rolesdeusuario = (roles:any) =>{
    let a = JSON.stringify(roles).replaceAll('"','').replaceAll('[', '').replaceAll(']','').replaceAll(',',' - ')
    return (a)

    
  }
*/

  //ver status con el filter para filtrar las cosas, no es necesario llamadas nuevas
  const activos = async () =>{
  let users: UserType[] = []
  for (let i of users24){
    if (i.status != 0){
      users.push(i)
    }
  }
  setUsers23(users)

  console.log("activos: ", users23);
  }

  const Inactivos = async () =>{
    let users: UserType[] = []
    for (let i of users24){
      if (i.status != 1){
        users.push(i)
      }
    }
    setUsers23(users)
  
    console.log("activos: ", users23);
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
          key:"status",
          label: "Estado"
        },
        {
            key: "actions",
            label: "Actions"
        } 
    ];

    return(
      <div style={{marginRight:40, marginLeft:20}}>
          <Button 
          onClick={() => {navigate("/formularioProv")}} as={Link} href="#" 
          //css={{right:"20px"}}
          >Crear nuevo usuario</Button>
          
          
          <Spacer y={0.5} ></Spacer>
        {/*ponerlos todos a la derecha estos*/}
        <input
            type="search"
            style={{borderRadius:15, textIndent:12,marginTop:"1.25%", float:'right', width:"20%", marginRight:"2%"}}
            
            placeholder="Busqueda por nombre"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
            
            />

        <div style={{marginLeft:"1.25%"}}>
          <Radio.Group 
              label="Filtro usuarios:"
              value={checked}
              onChange={setChecked}
              orientation="horizontal"
              style={{paddingLeft:"200px"}}
              css={{left:"20px"}}
            >
              
                <Radio value="Todos" color="primary" size="sm">Todos</Radio>
                <Radio value="Activos" color="success" size="sm">Activos</Radio>
                <Radio value="Inactivos" color="error" size="sm">Inactivos</Radio>
              
            </Radio.Group>
          </div>
          
          {<Spacer y={0.5}/> }
        
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
              <Table.Cell>{item[`status`] ? <Badge color="success" variant="flat">Activo</Badge> : <Badge color="error" variant="flat">Inactivo</Badge>}</Table.Cell>
              <Table.Cell> 
                  <Row justify="center" align="center">
                  
                  <Tooltip content="Editar Usuario">
                      <Button onClick={() => {navigate(`/editarProv/${item.rut}`,{state:{rut:item.rut}})}} as={Link} href="#">
                        Editar
                      {/*<EditIcon size={20} fill="#979797" />*/}
                      </Button>
                  </Tooltip>
                  
                  <Spacer x={0.5}/>
                  
                  {item.status == 1 &&
                    <Tooltip
                      content="Desactivar usuario"
                      
                      onClick={() => {console.log("Desactivar usuario", item.rut)}}
                  >
                      
                        <Button onClick={() => {handler3(`¿Está seguro de que quiere desactivar al usuario ${item.rut}?`,
                                                "desactivar",item.rut);console.log(item);}} color={"error"}>
                          Desactivar
                      </Button>

                    </Tooltip>}

                    {item.status == 0 &&
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

          {showResults3 && <ModalAbstracto configmodal = {datos}/>}
          
          
        </div>
)}