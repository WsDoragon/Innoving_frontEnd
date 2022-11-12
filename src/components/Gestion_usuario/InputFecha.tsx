import {Button, Spacer, Input, Image, Grid, Dropdown, Row, Modal, Text, FormElement, useModal } from "@nextui-org/react";
import React, { Component, useState } from "react";
import { Selection } from '@react-types/shared/src/selection';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";



function InputFecha () {
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


  const [prueba, daniel] = useState({
    username: "19941933-1",
    password: "25agosto1998",
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
    //state.username = state.username.replaceAll(".","")
    //state.username = state.username.replaceAll("-","")
    state.username = us

    if(state.dia[0] == "0"){
      state.dia = state.dia.replace("0","")
    }
    
    state.password = state.dia + state.mes + state.anio
    
    console.log('handleClick 👉️', state);
    /*
    if(state.username == prueba.username && state.password == prueba.password){
      console.log("FELICIDADES")
      navigate("/home")
    }
    else{
      console.log("CAGASTE")
    }*/
  
    axios.post("http://localhost:3001/users/login", state)
    .then( data =>{
      console.log(data.data)
      if (data.data.message){
        console.log(data.data.message)
        setMessage(data.data.message)
        console.log(data.data,"wena me equivoque")   
        setVisible(true)  
      }
      else{
        navigate("/proveedor#")
        sessionStorage.setItem("rol", JSON.stringify(data.data.roles))
        console.log(sessionStorage.rol)
      }
    })

  }; 

  return(
    <div className="wrapper">

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
        </div>
  )}

export default InputFecha;