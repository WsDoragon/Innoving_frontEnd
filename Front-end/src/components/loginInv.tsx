import {Button, Spacer, Input, Image, Grid, Dropdown, Row } from "@nextui-org/react";
import React, { Component } from "react";
import { Selection } from '@react-types/shared/src/selection';

function Invi () {
  const [selected, setSelected] = React.useState<Selection>(new Set("Mes"));

  const selectedValue = React.useMemo(
    () => selected,
    [selected]
  );
  return(
   <>
        <Spacer y={2.5} />

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
            placeholder="Día" 
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
            placeholder="Año" />
    </Row>

      <Spacer y={1.5} />
        <Button
        auto
        size="lg"
        css={{color:"#ffffff", fontWeight:"bold", background:"#0197a9", fontSize:"$lg"}}
        >Iniciar Sesión</Button>

        <Spacer y={2} />


  </>
  )}

export default Invi;