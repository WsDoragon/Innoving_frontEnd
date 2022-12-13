import React from 'react'
import { Visualizador } from '../pages/Visualizador'
import { BotonExtendido } from '../styledUnique/Buttons'
import { BoxEvidencias, Stack } from '../styledUnique/Contenedores'
import { OptionIndicadores, SelectIndicadores } from '../styledUnique/Select'
import { EtiquetasIndicadores, Texto, TextoBlockTable, TextoNegrita, TextoTituloNegrita } from '../styledUnique/Texto'

export const EvidenciaSinIndicador = (props:{type:string}) => {
  return (
    <BoxEvidencias type={props.type}>
            <TextoTituloNegrita>Nombre evidencia: </TextoTituloNegrita>
            <TextoBlockTable>
              <Stack>
              <Visualizador buttonName="Agregar indicadores">
                <SelectIndicadores >
                  <OptionIndicadores> Agregar Indicadores</OptionIndicadores>
                  <OptionIndicadores> Publicaciones </OptionIndicadores>
                  <OptionIndicadores> Publicaciones extranjeras </OptionIndicadores>
                  <OptionIndicadores> Porcentaje publicación </OptionIndicadores>
                </SelectIndicadores>
              </Visualizador>
              
              </Stack>
            </TextoBlockTable>
          </BoxEvidencias>

  )
}
