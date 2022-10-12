import {Button, Spacer, Input, Textarea, Text, FormElement } from "@nextui-org/react";
import axios from "axios";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Func (){
  
  const navigate = useNavigate();


    const [state, setState] = useState({
      username: "",
      password: "",
    });

    function handleChange(e: React.ChangeEvent<FormElement>) {
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value,
      });
    }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement,  MouseEvent>) => {
    //e.preventDefault();
    
    console.log('handleClick 👉️', state);

    axios.post("http://localhost:3001/users/login", state)
    .then( data =>{
      console.log(data.data)
      if (data.data.message){
        console.log(data.data)}
      else{
        navigate("/header")

        sessionStorage.setItem("rol", JSON.stringify(data.data.roles))
        console.log(sessionStorage.rol)
      }
      



    })

  }; 



  return(  
  <>
        <Spacer y={2.5} />

        <Input
          size="xl"
          width="200px"
          css={{$$inputPlaceholderColor:"#747574"}}
          labelPlaceholder="RUT"
          name="username"
          onChange={handleChange} 
          value={state.username} />

      <Spacer y={1} />
        <Input.Password
            clearable
            type="password"
            size= "xl"
            width="200px"
            placeholder="Contraseña"
            name="password"
            onChange={handleChange} 
            value={state.password}/>

      <Spacer y={1.5} />
        <Button
        auto
        size="lg"
        css={{color:"#ffffff", fontWeight:"bold", background:"#ff5101", fontSize:"$lg"}}
        onClick={handleClick}
        >Iniciar Sesión
        </Button>
        
        <Spacer x={3}/>
        

  </>
  )}








