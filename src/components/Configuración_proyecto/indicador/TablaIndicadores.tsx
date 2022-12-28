import React from 'react'
import { useEffect, useState } from "react";

import Modal from './Modal';
import styled from 'styled-components';

import clienteAxios from "../../../config/axios";
import axios from 'axios';


export default function  TablaIndicadores() {
  const [indicadores, setIndicadores] = useState([]);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [ejes, setEjes] = useState([]);

  const [indi, setIndi] : any= useState([]);

  const Editar = (indi : any) => {
    setTimeout(function(){
      cambiarEstadoModal1(!estadoModal1);
      setIndi(indi);
    }, 300);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://170.187.160.109:3001/indicadores/lista');
      setIndicadores(res.data.data);
    };
    fetchPosts();
  }, [] );

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://170.187.160.109:3001/ejes/lista');
      setEjes(res.data.data);
    };
    fetchPosts();
  }, []);
  

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Tipo de indicador</th>
          <th>Eje</th>
          <th>Responsable</th>
          <th>Opción</th>
        </tr>
      </thead>
      <tbody>
        {indicadores.map((indicador : any ) => (
          indicador.Aprobado === 2 ?
          <tr key={indicador.id} style={{backgroundColor: "#EEEDED", color: "#A7A4A4"}}>
            <td>{indicador.id}</td>
            <td>{indicador.nombre}</td>
            <td>{indicador.TipoIndicador}</td>
  
            {ejes.map((eje : any ) => (
              indicador.eje === eje.id?
              <td>{eje.nombre}</td>
              :
              <></>
            ))}
  
            <td>{indicador.Responsable}</td>
            <td>Eliminado</td>
          </tr>
        :
          indicador.Aprobado === 1 ||  indicador.Aprobado === 3?
            <tr key={indicador.id}>
              <td>{indicador.id}</td>
              <td>{indicador.nombre}</td>
              <td>{indicador.TipoIndicador}</td>
  
              {ejes.map((eje : any ) => (
                indicador.eje === eje.id?
                <td>{eje.nombre}</td>
                :
                <></>
              ))}
      
              <td>{indicador.Responsable}</td>
  
              {indicador.Aprobado === 3?              
                <td>Editando ...</td>
              
                :
                <>
                  <td>
                    <button className="button muted-button delete" onClick={  () => 
                      axios.put(`http://170.187.160.109:3001/indicadores/setpeticion/${indicador.id}`,
                      //window.location.reload()
                      )
                      }>Eliminar</button>
                  </td>
                  <td>
                    <button className="button muted-button edit" onClick= {()=> Editar(indicador)}>Editar</button>
                    <Modal
                      estado ={estadoModal1}
                      cambiarEstado={cambiarEstadoModal1}
                      titulo={`Editar indicador ID: ${indi.id}`}
                      key = {indi.id}
                      indicador = {indi}
                      mostrarHeader={true}
                      mostrarOverlay={true}
                      posicionModal={'center'}>
                    </Modal>
                  </td>
                </>
              }
  
  
            </tr>
          :
          indicador.Peticion === 'Añadir'?
          <tr key={indicador.id} style={{backgroundColor: "#c6fbd8ad"}}>
            <td>{indicador.id}</td>
            <td>{indicador.nombre}</td>
            <td>{indicador.TipoIndicador}</td>
  
            {ejes.map((eje : any) => (
              indicador.eje === eje.id?
              <td>{eje.nombre}</td>
              :
              <></>
            ))}
  
            <td>{indicador.Responsable}</td>
            <td style={{color: "green"}}>Solicitud Añadir</td>
          </tr>
          :indicador.Peticion === 'Eliminar'?
          <tr key={indicador.id} style={{backgroundColor: "#feb6b8a8"}}> 
            <td>{indicador.id}</td>
            <td>{indicador.nombre}</td>
            <td>{indicador.TipoIndicador}</td>
  
            {ejes.map((eje : any) => (
                indicador.eje === eje.id?
                <td>{eje.nombre}</td>
                :
                <></>
              ))}
  
            <td>{indicador.Responsable}</td>
            <td style={{color: "red"}}>Solicitud Eliminar</td>
          </tr>
          :
          <tr key={indicador.id} style={{backgroundColor: "#95cdf9"}}> 
          <td>{indicador.id}</td>
          <td>{indicador.nombre}</td>
          <td>{indicador.TipoIndicador}</td>
  
          {ejes.map((eje : any) => (
            indicador.eje === eje.id?
            <td>{eje.nombre}</td>
            :
            <></>
          ))}
  
          <td>{indicador.Responsable}</td>
          <td style={{color: "blue"}}>Solicitud Editar</td>
        </tr>       
          ))
        }
      </tbody>
    </table>
    )}
  
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