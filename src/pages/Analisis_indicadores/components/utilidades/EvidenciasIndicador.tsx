import React from 'react'
import { Visualizador } from '../pages/Visualizador'
import { BotonExtendido } from '../styledUnique/Buttons'
import { BoxEvidencias, Stack } from '../styledUnique/Contenedores'
import { Texto , EtiquetasIndicadores, TextoBlockTable, TextoNegrita, TextoTituloNegrita } from '../styledUnique/Texto'
import { InputPublicación } from '../styledUnique/VentanasEmergentes'

export const EvidenciasIndicador = (props:{type:string}) => {
  return (
    <BoxEvidencias type={props.type}>
            <EtiquetasIndicadores >M25</EtiquetasIndicadores>
            <EtiquetasIndicadores >M47</EtiquetasIndicadores>
            <EtiquetasIndicadores >M104</EtiquetasIndicadores>
            <TextoTituloNegrita>Nombre publicación</TextoTituloNegrita>
            <TextoBlockTable>
              <Stack>
                <BotonExtendido> Objetar </BotonExtendido>
              </Stack>
            </TextoBlockTable>
          </BoxEvidencias>

  )
}
