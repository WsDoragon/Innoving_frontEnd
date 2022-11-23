import React,{useState} from "react"
import {UseForm} from "./UseForm"
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap"
import {Form,Label,Input,Col,Alert} from "reactstrap"

type dataProyecto = {
    nombre: string,
    palabrasClave:string,
    financiamiento:string,
    concurso: string,
    año: string,
    codigo: string,
    presupuesto: number,
    fechaIni: Date,
    fechaTerm: Date, 
}

const dataExample: dataProyecto[] = [
    {nombre: "mejorando el 10k",
        palabrasClave:"10k, cafe, comia",
        financiamiento:"uach",
        concurso: "algun concurso",
        año: "2023",
        codigo: "n/a",
        presupuesto: 100000,
        fechaIni: new Date(),
        fechaTerm: new Date(),}
]


function Proyectos(){

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

    const [showEdit,setShowEdit] = React.useState(false)


    const handleShow = (d:boolean,id:string) => {
        if(id === "editar"){
            setShowEdit(d)
        }
            
    }

    return(
        <Container>
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>

                            <th>
                                Palabras clave
                            </th>

                            <th>
                                Financimiento
                            </th>

                            <th>
                                Concurso
                            </th>

                            <th>
                                Año
                            </th>

                            <th>
                                Codigo
                            </th>

                            <th>
                                Presupuesto
                            </th>

                            <th>
                                Fecha inicio
                            </th>

                            <th>
                                Fecha Termino
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {dataExample.map((archivos)=>(
                            <tr>
                                <td>{archivos.nombre}</td>
                                <td>{archivos.palabrasClave}</td>
                                <td>{archivos.financiamiento}</td>
                                <td>{archivos.concurso}</td>
                                <td>{archivos.año}</td>
                                <td>{archivos.codigo}</td>
                                <td>{archivos.presupuesto}</td>
                                <td>{archivos.fechaIni.toString()}</td>
                                <td>{archivos.fechaTerm.toString()}</td>


                                <td>
                                    <Button color = "primary" onClick={()=>handleShow(true,"editar")}>editar</Button>
                                </td>
                            </tr>
                        ))}

                        <Modal isOpen = {showEdit}>
                            <ModalHeader>
                                <div>
                                    <h3>editar proyecto</h3>
                                </div>
                            </ModalHeader>

                            <ModalBody>

                                

                                <Form onSubmit={onSubmit}>

                                    

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

                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" onClick={()=>handleShow(false,"editar")}>cancelar</Button>
                            </ModalFooter>

                        </Modal>

                
                    </tbody>
                </Table>

            </Container>
        

    )
}

export default Proyectos