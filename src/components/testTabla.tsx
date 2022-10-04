import axios from 'axios';
//@ts-ignore
import { Table, Row, Col, Tooltip, User, Text, Button } from "@nextui-org/react";
import algo from './Axiostabla';
import { StyledBadge } from "../styledIcons/StyledBadge";
import { IconButton } from "../styledIcons/IconButton";
import { EyeIcon } from "../styledIcons/EyeIcon";
import { EditIcon } from "../styledIcons/EditIcon";
import { DeleteIcon } from "../styledIcons/DeleteIcon";

type UserType = {
    rut: string
    nombre: string
    apellido: string
    correo:string
    pass: string
};

type GetUsersResponse = {
    data: UserType[];
  };

const data = algo()

export default function TestTabla() {
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

    const users: UserType[] = [{rut: "20318537-5", nombre: "Jorge", apellido: "Gonzalez", correo: "jorge@uach", pass: "123456" }, {rut: "ola", nombre: "a", apellido: "b", correo: "c", pass: "d" }]
    

    return(
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
      <Table.Body items={users}>
        {(item) => (
          <Table.Row key={item.rut}>
            <Table.Cell><Text b size={14}>{item[`rut`]} </Text></Table.Cell>
            <Table.Cell><Text b size={14}>{item[`nombre`]} {item[`apellido`]}</Text></Table.Cell>
            <Table.Cell><Text b size={14}>{item[`correo`]}</Text></Table.Cell>
            
            <Table.Cell> 
                <Row justify="center" align="center">
                
                <Col css={{ d: "flex" }}>
                <Tooltip content="Editar Usuario">
                    <Button onClick={() => console.log("editar usuario", item.rut)}>
                    <EditIcon size={20} fill="#979797" />
                    </Button>
                </Tooltip>
                </Col>
                <Col css={{ d: "flex" }}>
                <Tooltip
                    content="Desactivar usuario"
                    color="error"
                    onClick={() => console.log("Desactivar usuario", item.rut)}
                >
                    <Button>
                        Desactivar
                    </Button>
                </Tooltip>
                </Col>
            </Row></Table.Cell>
                
                
                
          </Table.Row>
        )}
      </Table.Body>
        </Table>
)}