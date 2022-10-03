import {Button, Spacer, Input } from "@nextui-org/react";

const Func = () => (
   <>
        <Spacer y={3} />

        <Input
          size="xl"
          width="250px"
          labelPlaceholder="RUT" />

      <Spacer y={1} />
        <Input.Password
            clearable
            type="password"
            size= "xl"
            width="250px"
            placeholder="Contraseña"/>

      <Spacer y={1.5} />
        <Button
        auto
        size="lg"
        css={{color:"#ffffff", fontWeight:"bold", background:"#ff5101"}}
        >Iniciar Sesión</Button>
  </>
  )

export default Func;