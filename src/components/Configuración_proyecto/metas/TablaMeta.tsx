import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import Modal from "./Modal"
import styled from 'styled-components';


export default function TablaMeta(props : any ) {

  const [metas, setMetas] = useState([]);
  const [indicadores, setIndicadores] = useState([]);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  const [met, setMet] = useState([]);
  const Editar = (met : any ) => {
    setTimeout(function(){
      cambiarEstadoModal1(!estadoModal1);
      setMet(met);
    }, 300);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:3001/indicadores/lista');
      setIndicadores(res.data.data);
    };
    fetchPosts();
  }, [true]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:3001/metas/lista');
      setMetas(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID del indicador</th>
          <th>Año</th>
          <th>Meta</th>
        </tr>
      </thead>
      <tbody>
        {metas.map((meta : any) => (
          meta.Aprobado === 2 ?
            <tr style={{ backgroundColor: "#EEEDED", color: "#A7A4A4" }}>

              {indicadores.map((indicador : any ) => (
                indicador.id === meta.idindicador ?
                  <td>{indicador.id}</td>
                  :
                  <></>
              ))}
              <td>{meta.fecha}</td>
              <td>{meta.cantidad}</td>
              <td>Eliminado</td>
            </tr>
            :
            meta.Aprobado === 1 || meta.Aprobado === 3?
            
              <tr>
                <td>{meta.idindicador}</td>
                <td>{meta.fecha}</td>
                <td>{meta.cantidad}</td>
              {meta.Aprobado === 3?            
                <td>Editando ...</td>
                :
                <>
                <td>
                  <button className="button muted-button delete" onClick={() =>{
                    axios.put(`http://localhost:3001/metas/setpeticion/${meta.idindicador}-${meta.fecha}`)
                    //window.location.reload()
                  }

                  }>Eliminar</button>
                </td>
                <td>
                  <button className="button muted-button edit" onClick= {()=> Editar(meta)}>Editar</button>
                  <Modal
                    estado ={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1}
                    titulo={`Editar meta del indicador ${meta.idindicador} del año ${meta.fecha}`}
                    key = {meta.id}
                    meta = {meta}
                    mostrarHeader={true}
                    mostrarOverlay={true}
                    posicionModal={'center'}>
                  </Modal>
                </td>
                </>
              }
              </tr>
              :
              meta.Peticion === 'Añadir' ?
                <tr key={meta.idindicador} style={{ backgroundColor: "#c6fbd8ad" }}>
                  <td>{meta.idindicador}</td>
                  <td>{meta.fecha}</td>
                  <td>{meta.cantidad}</td>
                  <td style={{ color: "green" }}>Peticion Añadir</td>
                </tr>
                :
                meta.Peticion === 'Eliminar' ?
                  <tr key={meta.idindicador} style={{ backgroundColor: "#feb6b8a8" }}>
                    <td>{meta.idindicador}</td>
                    <td>{meta.fecha}</td>
                    <td>{meta.cantidad}</td>
                    <td style={{ color: "red" }}>Peticion Eliminar</td>
                  </tr>
                :
                <tr key={meta.idindicador} style={{ backgroundColor: "#95cdf9" }}>
                  <td>{meta.idindicador}</td>
                  <td>{meta.fecha}</td>
                  <td>{meta.cantidad}</td>
                 <td style={{color: "blue"}}>Solicitud Editar</td>
                 </tr>
        ))

        }
      </tbody>
    </table>
  )
}

const Boton = styled.button`
display: block;
padding: 10px 30px;
border-radius: 100px;
color: #fff;
border: none;
background: #1766DC;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-weight: 500;
transition: .3s ease all;

&:hover {
  background: #0066FF;
}
`;

const Contenido = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

img {
  width: 100%;
  vertical-align: top;
  border-radius: 3px;
}
`;