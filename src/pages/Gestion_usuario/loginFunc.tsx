import {Button, Spacer, Input, Text, FormElement, Modal, Image, useModal} from "@nextui-org/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Func (){
    const { setVisible, bindings } = useModal();

    const [message, setMessage] = useState<any>();
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
      
      if (data.data.message){
        console.log(data.data.message)
        setMessage(data.data.message)
        console.log(data.data,"wena me equivoque")   
        setVisible(true)  
      }
      else{
        navigate("/header")
        sessionStorage.setItem("rol", JSON.stringify(data.data.roles))
        console.log(sessionStorage.rol)
      }
    })
  }; 

  return(  
      <div className="wrapper">

      <Spacer y={2}/>

          <Image
              width={800}
              height={180}
              src="https://raw.githubusercontent.com/WsDoragon/Gestion_Usuarios/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/logoA.png"
              objectFit="cover"
          />

        <Spacer y={0.5}/>

        <Text 
            h1 size={30}
            css={{color:"#fea858"}}
            weight="bold"
          >INNOVING
          </Text> 

        <Spacer y={2} />

        <Input
          size="xl"
          width="200px"
          css={{$$inputPlaceholderColor:"#747574"}}
          labelPlaceholder="RUT"
          name="username"
          onChange={handleChange} 
          value={state.username}
          />

      <Spacer y={1} />

        <Input.Password
            clearable
            type="password"
            size= "xl"
            width="200px"
            placeholder="Contraseña"
            name="password"
            onChange={handleChange} 
            value={state.password}
            />

      <Spacer y={1.5} />

        <Button
          auto
          size="lg"
          css={{color:"#ffffff", fontWeight:"bold", background:"#ff5101", fontSize:"$lg"}}
          onClick={handleClick}
          >Iniciar Sesión
        </Button>
        
        <Spacer x={3}/>
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








