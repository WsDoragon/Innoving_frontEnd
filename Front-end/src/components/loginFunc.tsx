import {Button, Spacer, Input, Textarea } from "@nextui-org/react";
import React, { Component } from "react";



export default function Func (){
  const [showResults, setShowResults] = React.useState(false)

  const onClick = () => {
    if (showResults) {
    setShowResults(false)
    }
    else{
        setShowResults(true)
    } 
  }
  let hola: String = "caca"
  return(

  
  <>
        <Spacer y={2.5} />

        <Input
          size="xl"
          width="200px"
          css={{$$inputPlaceholderColor:"#747574"}}
          labelPlaceholder="RUT" />

      <Spacer y={1} />
        <Input.Password
            clearable
            type="password"
            size= "xl"
            width="200px"
            placeholder="Contraseña"/>

      <Spacer y={1.5} />
        <Button
        auto
        size="lg"
        css={{color:"#ffffff", fontWeight:"bold", background:"#ff5101", fontSize:"$lg"}}
        onClick={onClick}
        >Iniciar Sesión
        </Button>
        

        <Spacer x={3}/>
        { showResults ?
        <>
        
        <Textarea
        readOnly
      //  initialValue= {String: hola }
      />
        </>
        : null }
        
  </>
  )}








