import React, {useState} from "react"
import {UseForm} from "./UseForm"
import {Button,Form,FormGroup,Label,Input,Col,Alert} from "reactstrap"


function RegProyect(){

    const initialState = {
        nombre: "",
        financiamiento: "",
        concurso: "",
        codigo: "",
        añoadj: "",
        fechaIni: new Date(),
        fechaTerm: new Date(),
        montoadj:0,
        palabrasCla: "",
        obj: ""
    }

    async function formularioCallback(){
        console.log(values)
        alert("Registrado")       
        
        // aqui va lo del mandar a backend
    }
    const {onChange,onSubmit,values} = UseForm(formularioCallback,initialState)




    return(
        <Form onSubmit={onSubmit}>

            <FormGroup>
                <Label htmlFor="head-form"></Label>
                Registrar Proyecto
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Nombre</Label>
                <Col sm={9}>
                    <Input
                        id= "nombre"
                        name = "nombre"
                        placeholder="Ingresar nombre proyecto"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Financiamiento</Label>
                <Col sm={9}>
                    <Input
                        id= "financiamiento"
                        name = "financiamiento"
                        placeholder="Ingresar financiamiento"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Concurso</Label>
                <Col sm={9}>
                    <Input
                        id= "concurso"
                        name = "concurso"
                        placeholder="Ingresar concurso"
                        onChange = {onChange}                     
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Codigo</Label>
                <Col sm={9}>
                    <Input
                        id= "codigo"
                        name = "codigo"
                        placeholder="Ingresar codigo"
                        onChange = {onChange}     
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Año de adjudicación</Label>
                <Col sm={9}>
                    <Input
                        id= "añoadj"
                        name = "añoadj"
                        placeholder="Ingresar año"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="fechaIni" sm={2}>Fecha de inicio</Label>
                <Col sm={9}>
                    <Input
                        id= "fechaIni"
                        name = "fechaIni"
                        placeholder="Ingresar fecha de inicio"
                        type="date"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="fechaTerm" sm={2}>Fecha de termino</Label>
                <Col sm={9}>
                    <Input
                        id= "fechaTerm"
                        name = "fechaTerm"
                        placeholder="Ingresar fecha de termino"
                        type="date"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Monto total adjudicado</Label>
                <Col sm={9}>
                    <Input
                        id= "montoadj"
                        name = "montoadj"
                        placeholder="Ingresar monto"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Palabras clave</Label>
                <Col sm={9}>
                    <Input
                        id= "palabrasCla"
                        name = "palabrasCla"
                        placeholder="palabras clave"                        
                        type="textarea"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Objetivo</Label>
                <Col sm={9}>
                    <Input
                        id= "obj"
                        name = "obj"
                        placeholder="objetivo"                        
                        type="textarea"
                        onChange = {onChange}
                    />
                </Col>

            </FormGroup>

            <Button type="submit" color="primary">
                Registrar
            </Button>
            
        </Form>
    )
}

export default RegProyect