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
            <TextoTituloNegrita>Nombre evidencia</TextoTituloNegrita>
            <TextoBlockTable>
              <Texto>Variable 1: </Texto>
              <Texto>Variable 2: </Texto>
              <Stack>
              <Visualizador buttonName="Editar">
                <TextoNegrita> Verificar valores </TextoNegrita>
                <InputPublicación placeholder='Eje'/>
                <BotonExtendido> Confirmar </BotonExtendido>
              </Visualizador>
              <BotonExtendido >Confirmar</BotonExtendido>
              </Stack>
            </TextoBlockTable>
          </BoxEvidencias>

  )
}
