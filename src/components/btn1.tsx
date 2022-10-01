import React from 'react'
import { Button, Grid } from "@nextui-org/react";

const Btn1 = ({text}:{text:string}) => {
  return (
    <Grid>
        <Button shadow color="success" bordered rounded auto>
          {text}
        </Button>
      </Grid>
  )
}

export default Btn1