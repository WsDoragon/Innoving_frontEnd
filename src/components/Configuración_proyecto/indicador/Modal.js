import React from 'react'
import { useEffect, useState } from "react";
import styled from 'styled-components';
//import "bootstrap-icons/font/bootstrap-icons.css";

import axios from 'axios'




const  Modal = ({children, estado, cambiarEstado, titulo = "xd", mostrarHeader,
mostrarOverlay, posicionModal, indicador}) => {
  
  const [indicadorAux, SetIndicadorAux] = useState(indicador);

  function Guardar(e){
    e.preventDefault();
    axios.put('http://170.187.160.109:3001/indicadores/editarindicador',{
      id : indicadorAux.id,
      CalificacionCORFO : indicadorAux.CalificacionCORFO,
      NumeroIndicador : indicadorAux.NumeroIndicador,
      MisionUniversitaria : indicadorAux.MisionUniversitaria,
      nombre : indicadorAux.nombre,
      TipoIndicador: indicadorAux.TipoIndicador,
      eje : indicadorAux.eje,
      Unidad : indicadorAux.Unidad,
      FuenteInformacion : indicadorAux.FuenteInformacion,
      Responsable : indicadorAux.Responsable,
      Frecuencia : indicadorAux.Frecuencia,
      Aprobado : 0,
      Peticion: "Editar",
      id_editado: (indicadorAux.CalificacionCORFO.charAt(0) + indicadorAux.NumeroIndicador),
      Descripcion: indicadorAux.Descripcion,
    })
    cambiarEstado(false);
    //window.location.reload(true);
  }
  

  
  return (
    <>
        {estado &&
            <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
                <ContenedorModal>
                    {mostrarHeader &&
                        <EncabezadoModal>
                            <h3> {titulo} </h3>
                        </EncabezadoModal>
                    }
                    
                    <BotonCerrar onClick={() => {cambiarEstado(false); SetIndicadorAux(indicador)}} style={{position: "absolute"}}> 
                    X
                    </BotonCerrar>

                    <TablaModal>
                    <form>
                      <label>Calificación CORFO</label>
                      <select value={indicadorAux.CalificacionCORFO} onChange={e => SetIndicadorAux({...indicadorAux,CalificacionCORFO:e.target.value})}>
                        <option value="Mínimo">Mínimo</option>
                        <option value="Crítico">Crítico</option>
                      </select>

                      <label>Número de Indicador</label>
                      <input type="text" value={indicadorAux.NumeroIndicador} onChange={e => SetIndicadorAux({
                        ...indicadorAux,NumeroIndicador: e.target.value
                      })}/>
                      
                      <label>Misión Universitaria</label>
                      <select value={indicadorAux.MisionUniversitaria} onChange={e => SetIndicadorAux({
                        ...indicadorAux,MisionUniversitaria: e.target.value
                      })}>
                        <option value="Primera">Primera</option>
                        <option value="Segunda">Segunda</option>
                        <option value="Tercera">Tercera</option>
                        <option value="General">General</option>
                      </select>
                      <label>Nombre del indicador</label>
                      <input type="text" value={indicadorAux.nombre} onChange={e => SetIndicadorAux({
                        ...indicadorAux,nombre: e.target.value
                      })}/>
                      <label>Tipo de Indicador</label>
                      <select value={indicadorAux.TipoIndicador} onChange={e => SetIndicadorAux({
                        ...indicadorAux,TipoIndicador: e.target.value
                      })}>
                        <option value="Entrada resultado">Entrada resultado</option>
                        <option value="Resultado">Resultado</option>
                        <option value="Proceso">Proceso</option>
                        <option value="Impacto">Impacto</option>
                      </select>
                      <label>Eje al que pertenece</label>
                      <select value={indicadorAux.eje} onChange={e => SetIndicadorAux({
                        ...indicadorAux,eje: e.target.value
                      })}>
                        <option value={1}>Gobernanza y Sinergias</option>
                        <option value={2}>Gestión del Cambio y Capital Humano Avanzado</option>
                        <option selected value={3}>I+D Aplicado y Vínculo con Sector Productivo</option>
                        <option value={4}>Comercialización de Tecnología y Emprendimiento de Base Tecnológica</option>
                        <option value={5}>Alianzas Internacionales</option>
                        <option value={6}> Armonización Curricular y postgrados tecnológicos</option>
                      </select>
                      <label>Unidad de medida</label>
                      <input type="text" value={indicadorAux.Unidad} onChange={e => SetIndicadorAux({
                        ...indicadorAux,Unidad: e.target.value
                      })}/>
                      <label>Fuente de Informacion</label>
                      <input type="text" value={indicadorAux.FuenteInformacion} onChange={e => SetIndicadorAux({
                        ...indicadorAux,FuenteInformacion: e.target.value
                      })}/>
                      <label>Responsable</label>
                      <input type="text" value={indicadorAux.Responsable} onChange={e => SetIndicadorAux({
                        ...indicadorAux,Responsable: e.target.value
                      })}/>
                      <label>Frecuencia de medición</label>
                      <select value={indicadorAux.Frecuencia} onChange={e => SetIndicadorAux({
                        ...indicadorAux,recuencia: e.target.value
                      })}>
                        <option value="Diario">Diario</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Mensual">Mensual</option>
                        <option value="Trimestral">Trimestral</option>
                        <option value="Semestral">Semestral</option>
                        <option value="Anual">Anual</option>
                      </select>
                      <label>Descripción (opcional)</label>
                      <input type="text" value={indicadorAux.Descripcion} onChange={e => SetIndicadorAux({
                        ...indicadorAux,Descripcion: e.target.value
                      })}/>
                      <button onClick={Guardar}>Enviar</button>
                    </form>
                    </TablaModal>

                    {children}
                
                    
                </ContenedorModal>
            
            
            </Overlay>
        
        }
    </>
    
  );
}

export default Modal



const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.mostrarOverlay ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'};
  padding: 40px;

  display: flex;
  align-items: ${props => props.posicionModal ? props.posicionModal : 'center'};
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 800px;
  min-height: 100px;
  margin-top: 5%;
  
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #E8E8E8;

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766DC;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #1766DC;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    background-color: red;
    width: 100%;
    height: 100%;
  }
`;

const TablaModal = styled.div`

  width: auto;
  height: 500px;
 
  
  position: relative;
  overflow: auto;
  form {
    overflow: auto;
    
  }
`;