import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate,useLocation } from "react-router-dom";
import { Modal, useModal, Text, FormElement ,Button, Spacer, Input, Grid, Checkbox } from "@nextui-org/react";
import Header from "./Header";
import axios from "axios";

type UserType = {
  rut: string
  nombre: string
  apellido: string
  correo:string
  contraseña: string
  roles: number[]
};



export default function FormularioEdit() {
  const volver = useNavigate();
  const getRut = useLocation();
  const rol_tags = ["gerente", "administrador", "analista"];
  const [selected, setSelected] = useState<string[]>([]);
  const [state, setState] = useState<UserType>({
      nombre: "",
      apellido: "",
      contraseña: "",
      correo: "",
      rut: "",
      roles:[]
    });

    


    const passDataToEdit = ()=>{
      axios.get(`http://localhost:3001/r_u/`,{params: {rut: getRut.state.rut}})
      .then(response => {
         const roles_u = response.data.data;
         let rolTagsOnDisplay : string[] = [];
         let rol_state : number[] = [];
         for (let i of roles_u){
          rol_state.push(i.id_rol);
          rolTagsOnDisplay.push(rol_tags[i.id_rol-1]);
         }
         setSelected(rolTagsOnDisplay);
         setState((state) => {
          return({
            ...state,
            roles: rol_state
          });
        });
      })
      axios.get(`http://localhost:3001/users/`,{params: {rut: getRut.state.rut}})
     .then(response => {
       const apiData = response.data.data;
       const molde : UserType = { rut : apiData.rut,
            correo : apiData.correo,
            contraseña : apiData.contraseña,
            nombre : apiData.nombre,
            apellido : apiData.apellido,
            roles : [] 
       }
       //setState(molde);
       setState((state) => {
        return({
          ...state,
          rut : apiData.rut,
          correo : apiData.correo,
          contraseña : apiData.contraseña,
          nombre : apiData.nombre,
          apellido : apiData.apellido
        });
      });
     })
    }


  useEffect(() => {
    passDataToEdit();
  }, []);

  let oldID = state.rut;
  console.log(state, oldID);

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

    axios.put(`http://localhost:3001/users/edit`, {id:oldID, newInfo:state})
    .then(response => {
      axios.post(`http://localhost:3001/r_u/change`, {id:oldID, newRoles:state.roles}).then(res => console.log("Roles cambiados. "+res.data));
      console.log("Usuario editado "+response.data)
    });
    console.log('handleClick 👉️', state);
    volver(-1)
  }; 
  const { setVisible, bindings } = useModal();  
  return (
    <div>
      <Header></Header>
      <Spacer y={1} />
      <Grid.Container justify="center">
          <Input width="50%" type="text" name="nombre" onChange={handleChange} value={state.nombre}/>
          <Spacer y={3} />
          <Input width="50%" placeholder="Apellido(s)" type="text" name="apellido" onChange={handleChange} value={state.apellido}/>
          <Spacer y={3} />

          <Input width="50%" placeholder="Correo" type="text" name="correo" onChange={handleChange} value={state.correo}/>
          <Spacer y={3} />

          <Input width="50%" placeholder="RUT" type="text" name="rut" onChange={handleChange} value={state.rut}/>
          <Spacer y={3} />

          <Grid.Container justify="center">
              <Checkbox.Group
                  label="Roles"
                  orientation="horizontal"
                  color="primary"
                  value={selected}
                  onChange={handleCheckbox}
                  >
                  <Checkbox value="gerente">Gerente</Checkbox>
                  <Checkbox value="administrador">Administrador</Checkbox>
                  <Checkbox value="analista">Analista</Checkbox>
              </Checkbox.Group>
              <Spacer y={4}/>
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
                    ¿Seguro que quiere guardar los cambios de este usuario?
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
