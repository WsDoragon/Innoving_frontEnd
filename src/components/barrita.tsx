import { Grid } from '@nextui-org/react'
import {Fragment} from 'react';
import Btn1 from '../components/btn1'

const barrita = () => {
  return (
    <Fragment>
        <Grid.Container gap={1}>
          <Btn1 text='Indicadores'></Btn1>
          <Btn1 text='Solicitudes'></Btn1>   
        </Grid.Container>
    </Fragment>
  )
}

export default barrita