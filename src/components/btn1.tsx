import React from 'react'
import { Button, Grid } from "@nextui-org/react";

const Btn1 = ({text}:{text:string}, {bntHandler}:any) => {
  return (
    <Grid>
        <Button onClick={bntHandler} shadow color="success" bordered rounded auto>
          {text}, 
        </Button>
      </Grid>
  )
}

export default Btn1