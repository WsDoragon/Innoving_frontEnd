import { Grid } from '@nextui-org/react'
import Btn1 from '../components/btn1'
import { Text } from "@nextui-org/react";


const submenu = () => {
  return (
    <div>
    <Text size="$3xl" h3>SubMenu</Text>
        <Grid.Container gap={1}>
                <Btn1 text='Indicadores'></Btn1>
                <Btn1 text='Solicitudes'></Btn1>  
        </Grid.Container>

    </div>
  )
}

export default submenu