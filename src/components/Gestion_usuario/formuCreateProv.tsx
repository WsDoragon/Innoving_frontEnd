import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Modal, useModal, FormElement ,Button, Spacer, Input, Row, Dropdown, Grid, Text } from "@nextui-org/react";
import axios from "axios";
import Header from "./Header";


type UserType = {
  rut: string
  nombre: string
  apellido: string
  correo:string
  contraseña: string
  dia: string
  mes: string
  anio: string
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

    const [selecte, setSelecte] = React.useState<any>(new Set("Mes"));

    const [state, setState] = useState<UserType>({
        nombre: "",
        apellido: "",
        contraseña: "",
        correo: "",
        rut: "",
        dia: "",
        mes: "",
        anio: "",
        roles: [4]
      });
      
      const selectedValue = React.useMemo(
        () => {
          selecte.forEach((value: any) => state.mes = value);
          return selecte;
        },
        [selecte]
      );



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
        console.log(state)
        if(state.dia[0].length == 1){
            state.dia = "0" + state.dia
        }
        state.contraseña = state.dia + state.mes + state.anio

        
        axios.post('http://localhost:3001/users/create', state).then(
        response => {
          console.log("Usuario creado "+ response.data);
          
          if(response.status === 400){
            console.log("ya existe")
          }

          axios.post(`http://localhost:3001/r_u/add`, {id: state.rut, roles: state.roles}).then(
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
      volver(-1)
      
    }; 
     
    return (
      <div>
      <Header/>
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

            <Row justify="center">

            <Spacer x={0.197}/>

            <Input
              size="xl"
              width="60px"
              placeholder="Día"             
              name="dia"
              onChange={handleChange} 
              value={state.dia}
              />

            <Spacer x={1}/>

            <Dropdown>

                <Dropdown.Button
                size={"lg"}
                css={{height:"52px", backgroundColor:"#f0f2f5", width:"200px", tt: "capitalize", fontSize:"$lg", color:"#747574" }}>
                {selectedValue}
                </Dropdown.Button>

                <Dropdown.Menu
                aria-label="Single selection actions"
                color="primary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selecte}
                onSelectionChange={setSelecte}
                css={{$$dropdownMenuMinWidth:"100px", width:"90%"}}
                >
                <Dropdown.Item key="enero">Enero</Dropdown.Item>
                <Dropdown.Item key="febrero">Febrero</Dropdown.Item>
                <Dropdown.Item key="marzo">Marzo</Dropdown.Item>
                <Dropdown.Item key="abril">Abril</Dropdown.Item>
                <Dropdown.Item key="mayo">Mayo</Dropdown.Item>
                <Dropdown.Item key="junio">Junio</Dropdown.Item>
                <Dropdown.Item key="julio">Julio</Dropdown.Item>
                <Dropdown.Item key="agosto">Agosto</Dropdown.Item>
                <Dropdown.Item key="septiembre">Septiembre</Dropdown.Item>
                <Dropdown.Item key="octubre">Octubre</Dropdown.Item>
                <Dropdown.Item key="noviembre">Noviembre</Dropdown.Item>
                <Dropdown.Item key="diciembre">Diciembre</Dropdown.Item>
                </Dropdown.Menu>
            
            </Dropdown>

            <Spacer x={1} />
            <Input
                    size="xl"
                    width="65px"
                    placeholder="Año"
                    name="anio"
                    onChange={handleChange} 
                    value={state.anio}
                    />
            </Row>
            <Spacer x={1} />

        <Grid.Container justify="center">
            <Spacer y={1}/>

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