import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";
import FileDownload from "js-file-download";
import Swal from "sweetalert2";

interface File {
  id: number;
  nombre: string;
  ruta: string;
  idFkPub: string;
}

export default function Publicaciones() {
  const [files, setFiles] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState<File>({
    id: 0,
    nombre: "",
    ruta: "",
    idFkPub: "",
  });
  const [pubId, setPubId] = useState<number>(-1);

  useEffect(() => {
    axios.get("http://localhost:3001/api/files").then(({ data }) => {
      console.log(data.data);
      setFiles(data.data);
    });
  }, [currentFile]);

  const openModal = (file: File) => {
    setCurrentFile(file);
    setIsModalOpen(true);
  };

  const closeModal = (flag: boolean) => {
    if (flag) {
      if (pubId > 0) {
        axios
          .post("http://localhost:3001/api/files/" + currentFile.id, {
            pubId,
          })
          .then(() => {
            Swal.fire({
              title: "Cambios Registrados",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    }
    setIsModalOpen(false);
    setCurrentFile({
      id: 0,
      nombre: "",
      ruta: "",
      idFkPub: "",
    });
  };

  return (
    <Container>
      <Table className="text-center">
        <thead>
          <tr>
            <th>ID</th>

            <th>Nombre</th>
            <th>Publicación ID</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {files?.map((archivo) => (
            <tr>
              <td>{archivo.id}</td>
              <td>{archivo.nombre}</td>
              <td>{archivo.idFkPub}</td>
              <td>
                <Button
                  style={{ marginRight: "10px" }}
                  color="primary"
                  onClick={() => {
                    axios({
                      url: `http://localhost:3001/api/files/download/${archivo.id}`,
                      method: "GET",
                      responseType: "blob",
                    }).then((response) => {
                      FileDownload(response.data, archivo.nombre);
                    });
                  }}
                >
                  Descargar
                </Button>
                <Button color="secondary" onClick={() => openModal(archivo)}>
                  Asociar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={isModalOpen}>
        <ModalHeader>
          <div>
            <h3>Asociar archivo</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <Table className="text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{currentFile?.id}</td>
                <td>{currentFile?.nombre}</td>
              </tr>
            </tbody>
          </Table>

          <FormGroup>
            <Label for="pubId">Ingresar Publicación ID: </Label>
            <Input
              type="number"
              name="number"
              id="pubId"
              placeholder="publicacion ID"
              defaultValue={currentFile?.idFkPub}
              onChange={(e) => setPubId(Number(e.target.value))}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => closeModal(true)}>
            Continuar
          </Button>
          <Button color="danger" onClick={() => closeModal(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}
