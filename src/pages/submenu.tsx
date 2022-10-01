import { Grid } from '@nextui-org/react'
import Btn1 from '../components/btn1'
import { Text } from "@nextui-org/react";


const submenu = () => {
  return (
    <div>
    <Text size="$3xl" h3>SubMenu</Text>
        <Grid.Container gap={1}>
                
                <Btn1 text='Gerente'></Btn1>
                <Btn1 text='Analista'></Btn1>
                <Btn1 text='Vision'></Btn1>
                <Btn1 text='Home'></Btn1>
                <Btn1 text='Quienes somos ?'></Btn1>   
        </Grid.Container>

    </div>
  )
}

export default submenu