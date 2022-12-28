import {Button, Spacer, Input, Image, Grid, Dropdown, Row, Modal, Text, FormElement, useModal } from "@nextui-org/react";
import React, { Component, useState } from "react";
import { Selection } from '@react-types/shared/src/selection';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";



function Invi () {
  const { setVisible, bindings } = useModal();

  const [message, setMessage] = useState<any>();
  const [selected, setSelected] = React.useState<any>(new Set("Mes"));

  const [state, setState] = useState({
    username: "",
    password: "",
    dia:"",
    mes: "",
    anio: ""
  });

  const selectedValue = React.useMemo(
    () => {
      selected.forEach((value: any) => state.mes = value);
      return selected;
    },
    [selected]
  );
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<FormElement>) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement,  MouseEvent>) => {
    //e.preventDefault();
    
    console.log(state.username)
    let us:string = "" 
    us = state.username.replaceAll(".","")
    state.username = us

    if(state.dia.length == 1){
      state.dia = "0" + state.dia
    }
    
    state.password = state.dia + "$" + state.mes + "$" + state.anio
    
    console.log('handleClick 👉️', state);

  
    axios.post("http://170.187.160.109:3001/users/login", state)
    .then( data =>{
      console.log(data.data)
      if (data.data.message){
        console.log(data.data.message)
        setMessage(data.data.message)
        console.log(data.data,"wena me equivoque")   
        setVisible(true)  
      }
      else{
        
        sessionStorage.setItem("rol", JSON.stringify(data.data.roles))
        console.log(sessionStorage.rol)
        navigate("/home")
      }
    })

  }; 

  return(
    <div className="wrapper">

        <Spacer y={2} />

        <Image
            width={800}
            height={180}
            src="https://raw.githubusercontent.com/WsDoragon/Gestion_Usuarios/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/logoA.png"
            objectFit="cover"
        />

        <Spacer y={0.5} />

        <Text
            h1 size={30}
            css={{color:"#0197a9"}}
            weight="bold"
            >Académico/VIDCA
        </Text> 

        <Spacer y={2} />

        <Input
          className="logininvBut"
        
          size="xl"
          width="200px"
          css={{$$inputPlaceholderColor:"#747574", margin:"$0"}}
          labelPlaceholder="RUT"
          name="username"
          onChange={handleChange} 
          value={state.username}
          />

      <Spacer y={1}/>

      <Row justify="center">

      <Spacer x={0.197}/>

      <Input
            size="xl"
            width="60px"
            labelPlaceholder="Día"             
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
          selectedKeys={selected}
          onSelectionChange={setSelected}
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
            labelPlaceholder="Año"
            name="anio"
            onChange={handleChange} 
            value={state.anio}
            />
    </Row>

      <Spacer y={1.5} />

        <Button
          auto
          size="lg"
          onClick={handleClick}
          css={{color:"#ffffff", fontWeight:"bold", background:"#0197a9", fontSize:"$lg"}}
          >Iniciar Sesión
        </Button>

        <Spacer y={3} />                
                <Button onClick={() => navigate("/admin")} size="sm">Login Innoving</Button>
        
        <Modal
          scroll
          width="260px"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          css={{justify:"center"}}
          {...bindings}
        >
          <Modal.Header>
            <Text 
            id="modal-title"
            size={20}
            css={{fontWeight:"bold"}}>
              Aviso
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text 
            id="modal-description"
            size={18}
            css={{textAlign:"center"}}>
              {message}
              </Text>
          </Modal.Body>
          <Modal.Footer
          justify="center"
          >
          <Button
            css={{justifyContent:"center"}} 
            auto flat color="error" 
            onClick={() => setVisible(false)}>
            OK
            </Button>
          </Modal.Footer>
        </Modal>

        
        </div>
  )}

export default Invi;