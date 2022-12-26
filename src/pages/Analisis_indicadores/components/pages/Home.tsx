import React, { useState, ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom';
import { BoxIndicador } from '../BoxIndicador'
import { Ejes, IndicadoresResumidos } from '../interfaces'
import { Buscador, ContenedorBuscador, ContenedorIconBuscador } from '../styledUnique/Input/Buscadores';
import { LogoInnoving } from '../styledUnique/Imagenes';
import { ContenedorBody, ContenedorIndicadores, ContenedorItemsAcordeon, Topbar, SubIndicadores } from '../styledUnique/Contenedores';
import { TextoTitulo, TextoTituloPrincipal } from '../styledUnique/Texto';
import { EvidenciasIndicador } from '../utilidades/EvidenciasIndicador';
import { EvidenciaSinIndicador } from '../utilidades/EvidenciaSinIndicador';
import { OptionIndicadores, SelectIndicadores } from '../styledUnique/Select';


export const Home = ( props: {ejes: Array<Ejes>, indicadoresResumidos: Array<IndicadoresResumidos>}) => {

  const [selectIndicador, setSelectIndicador] = useState<string[]>([]);
  const [s, setS] = useState<string[]>([]);
  const [ejesIn, setEjesIn] = useState(props.ejes);
  const [indicadores, setIndicadores] = useState(props.indicadoresResumidos);


  const seleccionIndicador = (e: ChangeEvent<{value: string}>):void => {
    const value =  e?.target?.value;
    setSelectIndicador( [ ...selectIndicador  ,value] )
  }
  /*
  const seleccionIndicador2 = (e: ChangeEvent<{value: string}>):void => {
    const value =  e?.target?.value;
    setSelectIndicador(prev => new Set(prev).add(item));
  }
  */

  return (
    <>
      <Topbar>
        <ContenedorBuscador marginLeft="20px"> 
          <ContenedorIconBuscador> 
            <i className='bx bx-search'></i>
          </ContenedorIconBuscador>
          <Buscador 
            width="60%"
            placeholder='Buscador de indicadores...'
          />
        </ContenedorBuscador>
      </Topbar>


      <ContenedorBody>

        {/*
        <TextoTituloPrincipal>Ejes</TextoTituloPrincipal>

        <ContenedorItemsAcordeon margin="20px">
              {ejesIn.map(ejes => {
                return(
                <details className='acordeon' key={ejes.id}>
                  <summary>{ejes.nombre}</summary>

                    { indicadores.map((indi) => {
                      return(       
                              (ejes.nombre === indi.eje) ?          
                              <div key={indi.id}> 
                                <BoxIndicador {...indi}/>
                              </div>:
                              []
                            )
                    })}
              </details>
                )
              })}
          </ContenedorItemsAcordeon>
            */}
        <TextoTituloPrincipal>Evidencias sin indicadores</TextoTituloPrincipal>
        <EvidenciaSinIndicador type="advertencia"></EvidenciaSinIndicador>
        {/*
        <SelectIndicadores value={selectIndicador} onChange={seleccionIndicador} >
          <OptionIndicadores> Agregar Indicadores</OptionIndicadores>
          <OptionIndicadores> Publicaciones </OptionIndicadores>
          <OptionIndicadores> Publicaciones extranjeras </OptionIndicadores>
          <OptionIndicadores> Porcentaje publicación </OptionIndicadores>
        </SelectIndicadores>
        
        <ContenedorIndicadores>
        {selectIndicador.map((indi,index) => {
            return (
              <SubIndicadores key={indi}>
                <span>{indi}</span>
                <button> X </button>
              </SubIndicadores>
            )
          })}
        </ContenedorIndicadores>

        */}


      </ContenedorBody>

      
    </>
  )
}
