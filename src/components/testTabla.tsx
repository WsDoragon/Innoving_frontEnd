import axios from 'axios';
//@ts-ignore
import { Table, Row, Col, Tooltip, User, Text, Button, Link, Spacer, Modal, useModal } from "@nextui-org/react";
import algo from './Axiostabla';
import { StyledBadge } from "../styledIcons/StyledBadge";
import { IconButton } from "../styledIcons/IconButton";
import { EyeIcon } from "../styledIcons/EyeIcon";
import { EditIcon } from "../styledIcons/EditIcon";
import { DeleteIcon } from "../styledIcons/DeleteIcon";
import Formulario from "./formuCreateInnoving";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

type UserType = {
    rut: string
    nombre: string
    apellido: string
    correo:string
    pass: string
    roles: string
};

type GetUsersResponse = {
    data: UserType[];
  };

export default function TestTabla(data:GetUsersResponse) {
  //PROBANDO
  const { setVisible, bindings } = useModal();
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
        
        <Button onClick={() => {navigate("/formulario")}} as={Link} href="#" >Crear nuevo usuario</Button>
          <Table
          aria-label="Example table with dynamic content"
          css={{
            height: "auto",
            minWidth: "100%",
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
        <Table.Body items={data.data}>
          {(item) => (
            <Table.Row key={item.rut}>
              <Table.Cell><Text b size={14}>{item[`rut`]} </Text></Table.Cell>
              <Table.Cell><Text b size={14}>{item[`nombre`]} {item[`apellido`]}</Text></Table.Cell>
              <Table.Cell><Text b size={14}>{item[`correo`]}</Text></Table.Cell>
              <Table.Cell><Text b size={14}>{item[`roles`]}</Text></Table.Cell>
              <Table.Cell> 
                  <Row justify="center" align="center">
                  
                  <Col css={{ d: "flex" }}>
                  <Tooltip content="Editar Usuario">
                      <Button onClick={() => {navigate(`/editarUser/${item.rut}`,{state:{rut:item.rut}})}} as={Link} href="#">
                        Editar
                      {/*<EditIcon size={20} fill="#979797" />*/}
                      </Button>
                  </Tooltip>
                  </Col>
                  <Spacer x={0.5}/>
                  <Col css={{ d: "flex" }}>
                  <Tooltip
                      content="Desactivar usuario"
                      
                      onClick={() => console.log("Desactivar usuario", item.rut)}
                  >
                      <Button onClick={() => setVisible(true)} color={"error"}>
                          Desactivar
                      </Button>
                      
                  </Tooltip>
                  </Col>
              </Row></Table.Cell>      
            </Table.Row>
          )}
        </Table.Body>
          </Table>

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
              ¿Está seguro de que quiere desactivar al usuario X?
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto onClick={() => {setVisible(true)}}>
              Si
            </Button>
            <Button auto flat color="error" onClick={() => setVisible(false)}>
              No
            </Button>                
          </Modal.Footer>
        </Modal>
        </div>
)}