import React,{useState} from "react"
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap"


type dataFiles = {
    id: number,
    nombre: string,
    nombreArchivo: string,
    idPubli: number,
    idProy: number
}

const dataExample: dataFiles[] =  [
    {id:1, nombre: "reg.pdf",nombreArchivo: "registro de ejemplo 1",idPubli: 1,idProy:0},
    {id:2, nombre: "planilla2021.exel",nombreArchivo: "notas alumnos",idPubli: 2,idProy:0},
    {id:3, nombre: "presentacion final.pptx",nombreArchivo: "presentacion publicacion",idPubli: 5,idProy:0},
]

type dataPubli = {
    id:number,
    titulo:string
}

type dataProyec = {
    id:number,
    nombre:string
}

const dataPub: dataPubli[] = [
    {id:1, titulo: "hola"},
    {id:2,titulo: "como andas"}
]

const dataPro: dataProyec[] = [
    {id:5,nombre:"leo"},
    {id:10,nombre:"fabi"}
]


function Files(){    

    const [showAsoc,setShowAsoc] = React.useState(false)

    const [showDelete,setShowDelete] = React.useState(false)

    const [showPubli,setShowPubli] = React.useState(false)

    const [showProyec,setShowProyec] = React.useState(false)

    const handleShow = (d:boolean,id:string) => {
        if(id === "asociar") setShowAsoc(d)
        else if(id === "eliminar") setShowDelete(d)
        else if(id === "publi") setShowPubli(d)
        else if(id === "proye") setShowProyec(d)
    }

        return(
            <Container>
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>

                            <th>
                                nombre
                            </th>

                            <th>
                                nombreArchivo
                            </th>

                            <th>
                                idPubli
                            </th>

                            <th>
                                idProy
                            </th>

                            <th>
                                acciones
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {dataExample.map((archivos)=>(
                            <tr>
                                <td>{archivos.id}</td>
                                <td>{archivos.nombre}</td>
                                <td>{archivos.nombreArchivo}</td>
                                <td>{archivos.idPubli}</td>
                                <td>{archivos.idProy}</td>
                                <td>
                                    <Button color = "primary" onClick={()=>handleShow(true,"asociar")}>Asociar</Button>{"  "}
                                    <Button color = "danger" onClick={()=>handleShow(true,"eliminar")}  >eliminar</Button>
                                </td>
                            </tr>
                        ))}

                        <Modal isOpen = {showAsoc}>
                            <ModalHeader>
                                <div>
                                    <h3>Asociar</h3>
                                </div>
                            </ModalHeader>

                            <ModalBody>

                                <Button color="primary" onClick={()=>handleShow(true,"publi")} >Publicaciones</Button>{"  \n "}
                                <Button color="primary" onClick={()=>handleShow(true,"proye")} >proyectos</Button>

                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" onClick={()=>handleShow(false,"asociar")}>cancelar</Button>
                            </ModalFooter>

                        </Modal>

                        <Modal isOpen = {showDelete}>
                            <ModalHeader>
                                <div>
                                    <h3>Borrar</h3>
                                </div>
                            </ModalHeader>

                            <ModalBody>

                            <Button color="danger">borrar!</Button>

                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" onClick={()=>handleShow(false,"eliminar")} >Cancelar</Button>
                            </ModalFooter>

                        </Modal>

                        <Modal isOpen = {showPubli}>
                            <ModalHeader>
                                <div>
                                    <h3>Asociar a publicaciones</h3>
                                </div>
                            </ModalHeader>

                            <ModalBody>

                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            ID
                                        </th>
                                            
                                        <th>
                                            Titulo
                                        </th>

                                        <th>
                                            acción
                                        </th>

                                        </tr>
                                </thead>

                                <tbody>

                                    {dataPub.map((archivos)=>(
                                <tr>
                                    <td>{archivos.id}</td>
                                    <td>{archivos.titulo}</td>
                                    <td>
                                        <Button color = "primary">Asociar</Button>
                                        
                                    </td>
                                </tr>
                            ))}

                                </tbody>

                            </Table>

                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" onClick={()=>handleShow(false,"publi")} >Cancelar</Button>
                            </ModalFooter>

                        </Modal>

                        <Modal isOpen = {showProyec}>
                            <ModalHeader>
                                <div>
                                    <h3>Asociar a proyectos</h3>
                                </div>
                            </ModalHeader>

                            <ModalBody>

                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            ID
                                        </th>
                                            
                                        <th>
                                            Nombre
                                        </th>

                                        <th>
                                            acción
                                        </th>

                                        </tr>
                                </thead>

                                <tbody>

                                    {dataPro.map((archivos)=>(
                                <tr>
                                    <td>{archivos.id}</td>
                                    <td>{archivos.nombre}</td>
                                    <td>
                                        <Button color = "primary">Asociar</Button>
                                        
                                    </td>
                                </tr>
                            ))}

                                </tbody>

                            </Table>

                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" onClick={()=>handleShow(false,"proye")} >Cancelar</Button>
                            </ModalFooter>
                        </Modal>
                    </tbody>
                </Table>
            </Container>
        )
    }

export default Files