import {Button, Spacer, Input } from "@nextui-org/react";

const Func = () => (
  <>
        <Spacer y={2.5} />

        <Input
          size="xl"
          width="200px"
          css={{$$inputPlaceholderColor:"#747574"}}
          labelPlaceholder="RUT" />

      <Spacer y={1} />
        <Input.Password
            clearable
            type="password"
            size= "xl"
            width="200px"
            placeholder="Contraseña"/>

      <Spacer y={1.5} />
        <Button
        auto
        size="lg"
        css={{color:"#ffffff", fontWeight:"bold", background:"#ff5101", fontSize:"$lg"}}
        >Iniciar Sesión</Button>
  </>
  )

export default Func;