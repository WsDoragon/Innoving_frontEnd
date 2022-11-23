import React, {useState} from "react"
import {UseForm} from "./UseForm"
import {Button,Form,FormGroup,Label,Input,Col,Alert} from "reactstrap"


const UploadForm = () =>{

    const initialState = {
        nombre: "",
        archivo: File
    }

    async function formularioCallback(){
        console.log(values)
        alert("subido correctamente")
        
        // aqui va lo del mandar a backend y revisar que todo este bien??
    }

    const {onChange,onSubmit,values} = UseForm(formularioCallback,initialState)


    return(
        <Form onSubmit={onSubmit}>

            <FormGroup>
                <Label htmlFor="head-form"></Label>
                Subir archivos
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Nombre</Label>
                <Col sm={9}>
                    <Input
                        id= "nombre"
                        name = "nombre"
                        placeholder="Ingresar nombre del archivo"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Archivo</Label>
                <Col sm={9}>
                    <Input
                        id= "archivo"
                        name = "archivo"
                        type="file"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <Button type="submit" color="primary">
                Subir
            </Button>


        </Form>
    )
}

export default UploadForm