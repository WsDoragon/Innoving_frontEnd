import {Button, Spacer, Input, Image, Grid, Dropdown, Row, Text } from "@nextui-org/react";
import React from "react";
import { Selection } from '@react-types/shared/src/selection';

function Invi () {
  const [selected, setSelected] = React.useState<Selection>(new Set("Mes"));

  const selectedValue = React.useMemo(
    () => selected,
    [selected]
  );

  return(
    <div className="wrapper">

        <Spacer y={2} />

        <Image
            width={800}
            height={180}
            src="https://raw.githubusercontent.com/WsDoragon/Gestion_Usuarios/main/P%C3%A1gina-Gesti%C3%B3n/src/assets/logoA.png"
            objectFit="cover"
        />

        <Spacer y={0.5} />

        <Text h1 size={30}
            css={{color:"#0197a9"}}
            weight="bold"
          >
            Evidencias
          </Text> 

        <Spacer y={2} />

        <Input
          size="xl"
          width="200px"
          css={{$$inputPlaceholderColor:"#747574"}}
          labelPlaceholder="RUT"
           />

      <Spacer y={1} />

      <Row justify="center">

      <Spacer x={0.197} />

      <Input
            size="xl"
            width="60px"
            labelPlaceholder="Día" 
            css={{}}
            
            />

      <Spacer x={1} />

      <Dropdown>

        <Dropdown.Button
          size={"lg"}
          css={{height:"52px", backgroundColor:"#f0f2f5", width:"200px", tt: "capitalize", fontSize:"$lg", color:"#747574" }}>
          {selectedValue}
        </Dropdown.Button>

        <Dropdown.Menu
          aria-label="Single selection actions"
          color="primary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          css={{$$dropdownMenuMinWidth:"100px", width:"90%"}}
        >
          <Dropdown.Item key="enero">Enero</Dropdown.Item>
          <Dropdown.Item key="febrero">Febrero</Dropdown.Item>
          <Dropdown.Item key="marzo">Marzo</Dropdown.Item>
          <Dropdown.Item key="abril">Abril</Dropdown.Item>
          <Dropdown.Item key="mayo">Mayo</Dropdown.Item>
          <Dropdown.Item key="junio">Junio</Dropdown.Item>
          <Dropdown.Item key="julio">Julio</Dropdown.Item>
          <Dropdown.Item key="agosto">Agosto</Dropdown.Item>
          <Dropdown.Item key="septiembre">Septiembre</Dropdown.Item>
          <Dropdown.Item key="octubre">Octubre</Dropdown.Item>
          <Dropdown.Item key="noviembre">Noviembre</Dropdown.Item>
          <Dropdown.Item key="diciembre">Diciembre</Dropdown.Item>
        </Dropdown.Menu>
      
      </Dropdown>

      <Spacer x={1} />

      <Input
            size="xl"
            width="65px"
            labelPlaceholder="Año" />
    </Row>

      <Spacer y={1.5} />

        <Button
        auto
        size="lg"
        css={{color:"#ffffff", fontWeight:"bold", background:"#0197a9", fontSize:"$lg"}}
        >
          Iniciar Sesión
        </Button>

        <Spacer y={2} />

        </div>
  )}

export default Invi;