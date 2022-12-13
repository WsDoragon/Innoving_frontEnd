import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./boxIndicadores.css"
import { IndicadoresResumidos } from './interfaces'
import { Box } from './styledUnique/Contenedores'
import {Texto, TextoBlock, TextoNegrita} from "./styledUnique/Texto"

export const BoxIndicador = (props: IndicadoresResumidos) => {

  const [indicadores, setIndicadores] = useState(props);
  let navigate = useNavigate();

  const navegar = () => {
    navigate(`./indicador/${props.id}`)
  }

  return (
    <Box onClick={ navegar }>
      <TextoBlock>
        <TextoNegrita> Nombre: </TextoNegrita>
        <Texto> {props.nombre} </Texto>
      </TextoBlock>
      <TextoBlock>
        <TextoNegrita> Id:  </TextoNegrita>
        <Texto> {props.id}</Texto>
      </TextoBlock>
      <TextoBlock>
        <TextoNegrita> Descripción:  </TextoNegrita>
        <Texto> {props.descripcion}</Texto>
      </TextoBlock>
    </Box>
  )
}
