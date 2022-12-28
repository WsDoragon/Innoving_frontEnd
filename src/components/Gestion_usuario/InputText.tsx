import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Modal, useModal,FormElement ,Button, Spacer, Input, Grid, Text, Checkbox } from "@nextui-org/react";
import axios from "axios";

type UserType = {
  rut: string
  nombre: string
  apellido: string
  correo:string
  contraseña: string
  roles: number[]
};

function InputText() {
    const volver = useNavigate();
    const { setVisible, bindings } = useModal();
    const rol_tags = ["gerente", "administrador", "analista"];
    const [selected, setSelected] = useState<string[]>([]);
    const [state, setState] = useState<UserType>({
        nombre: "",
        apellido: "",
        contraseña: "",
        correo: "",
        rut: "",
        roles: []
      });

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
      //e.preventDefault();
      axios.post('http://170.187.160.109:3001/users/create', state);
      console.log('handleClick 👉️', state);
      volver(-1)
    }; 
     
    return (
      <div>
        <Grid.Container justify="center">
            <Input width="50%" placeholder="Nombre(s)" type="text" name="nombre" onChange={handleChange} value={state.nombre}/>
            <Spacer y={3} />

            <Input width="50%" placeholder="Apellido(s)" type="text" name="apellido" onChange={handleChange} value={state.apellido}/>
            <Spacer y={3} />

            <Input width="50%" placeholder="Correo" type="text" name="correo" onChange={handleChange} value={state.correo}/>
            <Spacer y={3} />

            <Input width="50%" placeholder="Contraseña" type="text" name="contraseña" onChange={handleChange} value={state.contraseña}/>
            <Spacer y={3} />

            <Input width="50%" placeholder="RUT" type="text" name="rut" onChange={handleChange} value={state.rut}/>
            <Spacer y={3} />

        </Grid.Container>
        </div>
    );
  }

export default InputText;