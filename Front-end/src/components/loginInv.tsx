import {Button, Spacer, Input, Image, Dropdown, } from "@nextui-org/react";

const Invi = () => (
   <>
        <Spacer y={3} />

        <Input
          size="xl"
          width="250px"
          labelPlaceholder="RUT" />

      <Spacer y={1} />

      <Image
                src="https://cdn.discordapp.com/attachments/788152688000499722/1026350066367213578/unknown.png"
            />

      <Spacer y={1.5} />
        <Button
        auto
        size="lg"
        css={{color:"#ffffff", fontWeight:"bold", background:"#0197a9"}}
        >Iniciar Sesión</Button>

        <Spacer y={2} />


  </>
  )

export default Invi;