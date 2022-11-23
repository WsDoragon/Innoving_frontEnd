import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate,useLocation } from "react-router-dom";
import { Modal, useModal, FormElement ,Button, Spacer, Input, Row, Dropdown, Grid, Text } from "@nextui-org/react";
import Header from "./Header";
import axios from "axios";

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



export default function FormularioEdit() {
  const volver = useNavigate();
  const getRut = useLocation();
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
            dia: apiData.dia,
            mes: apiData.mes,
            anio: apiData.anio,
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
          apellido : apiData.apellido,
          dia: apiData.dia,
          mes: apiData.mes,
          anio: apiData.anio
        });
      });
     })
    }


  useEffect(() => {
    passDataToEdit();
  }, []);

  let oldID = state.rut;
  console.log(state, oldID);
  
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

          <Input width="50%" placeholder="Contraseña" type="text" name="contraseña" onChange={handleChange} value={state.contraseña}/>
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
