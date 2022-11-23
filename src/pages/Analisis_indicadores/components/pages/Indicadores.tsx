import React, { useEffect, useState } from 'react'
import { Navigate , Outlet, useNavigate, useParams} from 'react-router-dom'
import {Visualizador} from './Visualizador'
import { Navbar } from '../Navbar'
import { indicadoresResumidos } from '../apifake'
import { IndicadoresResumidos as indi } from '../interfaces'
import { Box, BoxEvidencias, ContenedorGrid, ContenedorIndicador, Stack } from '../styledUnique/Contenedores'
import { VariablesIndicadores } from '../styledUnique/Input/VariablesIndicadores'
import { Texto, TextoBlock, TextoBlockTable, TextoTitulo, TextoTituloNegrita } from '../styledUnique/Texto'
import { EvidenciasIndicador } from '../utilidades/EvidenciasIndicador'

//const doc01 = require( "../../assets/documentoPrueba.pdf" ) as string;

export const Indicadores = () => {

    const { idIndicador } = useParams();
    const [indicador, setIndicador] = useState<indi>();

    useEffect(() => {
      setIndicador(indicadoresResumidos.filter( indi => indi.id === idIndicador)[0])
    }, [idIndicador])
    

    return (
      <ContenedorGrid>
        <Navbar/>
        <ContenedorIndicador>
          <h2>Nombre indicador: {indicador?.nombre}</h2>
          <h2>Todas las evidencias</h2>

          <EvidenciasIndicador type="error"/>
          <EvidenciasIndicador type="bien"/>
        </ContenedorIndicador>
        <Outlet/>
      </ContenedorGrid>
    )
}
