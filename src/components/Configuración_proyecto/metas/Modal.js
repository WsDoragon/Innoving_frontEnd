import React from 'react'
import { useEffect, useState } from "react";
import styled from 'styled-components';

import axios from 'axios'




const  Modal = ({children, estado, cambiarEstado, titulo = "xd", mostrarHeader,
mostrarOverlay, posicionModal, meta}) => {
  
  const [metaAux, SetMetaAux] = useState(meta);

  function Guardar(e){
    e.preventDefault();
    axios.put('http://localhost:3001/metas/editarmeta',{
      id : metaAux.id,
      fecha : metaAux.fecha,
      cantidad : metaAux.cantidad,
      idindicador: metaAux.idindicador
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
                    
                    <BotonCerrar onClick={() => {cambiarEstado(false); SetMetaAux(meta)}} style={{position: "absolute"}}> 
                    X
                    </BotonCerrar>

                    <TablaModal>
                    <form>
                      <label>Año</label>
                      <select value={metaAux.fecha} onChange={e => SetMetaAux({
                        ...metaAux,fecha: e.target.value
                      })}>
                        <option value="2035">2035</option>
                        <option value="2034">2034</option>
                        <option value="2033">2033</option>
                        <option value="2032">2032</option>
                        <option value="2031">2031</option>
                        <option value="2030">2030</option>
                        <option value="2029">2029</option>
                        <option value="2028">2028</option>
                        <option value="2027">2027</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                      </select>
                      <label>Meta propuesta </label>
                      <input type="text" value={metaAux.cantidad} onChange={e => SetMetaAux({
                        ...metaAux,cantidad: e.target.value
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