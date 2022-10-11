import {Image, Button, Spacer, Grid } from "@nextui-org/react";
import React, { Component } from "react";
import Func from "../components/loginFunc";
import Invi from "../components/loginInv";

export default function Login () {
  
  const [showResults, setShowResults] = React.useState(false)
  const [showResults2, setShowResults2] = React.useState(false)
  
  const onClick = () => {
      if (showResults) {
      setShowResults(false)
      }
      else{
          setShowResults(true)
          setShowResults2(false)
      } 
  }

  const onClick2 = () => {
      if (showResults2) {
      setShowResults2(false)
      }
      else{
          setShowResults2(true)
          setShowResults(false)
      } 
  }

  return(
  <div className="wrapper">
    <Spacer y={3} />


        <Image
            width={800}
            height={180}
            src="https://raw.githubusercontent.com/WsDoragon/Gestion_Usuarios/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/logoA.png"
            objectFit="cover"
        />


    <Spacer y={3} />

    <Grid xs={12}>       
        <Button
        
        css={{color:"#ffffff", fontWeight:"bold", background:"#ff5101", fontSize:"$xl", width:"150px", height:"50px"}}
        onClick={onClick}
        >Funcionarios
    </Button>

    <Spacer x={2} />

    <Button
        
        css={{color:"#ffffff", fontWeight:"bold", background:"#0197a9", fontSize:"$xl", width:"150px", height:"50px"}}
        onClick={onClick2}
        >Invitados
    </Button>
</Grid>




{  showResults ? <Func/> : null }
{  showResults2 ? <Invi /> : null }

</div>
  )
}