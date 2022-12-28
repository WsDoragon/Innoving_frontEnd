import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import fileDownload from "js-file-download";

export default function FilesModal({
  isOpen,
  closeModal,
  publication,
}: {
  isOpen: boolean;
  closeModal: () => void;
  publication: any;
}) {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const { id } = publication;

    if (id) {
      axios.get(`http://170.187.160.109:3001/api/pubs/${id}`).then(({ data }) => {
        if (data) {
          setFiles(data.data.files);
        }
      });
    }
  }, [publication]);

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div>
          <h3>Archivos</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <Table className="text-center">
          <thead>
            <tr>
              <th>ID</th>

              <th>Nombre</th>

              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {files?.map((archivo: any) => (
              <tr>
                <td>{archivo.id}</td>
                <td>{archivo.nombre}</td>
                <td>
                  <Button
                    style={{ marginRight: "10px" }}
                    color="primary"
                    onClick={() => {
                      axios({
                        url: `http://170.187.160.109:3001/api/files/download/${archivo.id}`,
                        method: "GET",
                        responseType: "blob",
                      }).then((response) => {
                        fileDownload(response.data, archivo.nombre);
                      });
                    }}
                  >
                    Descargar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>

      <ModalFooter>
        <Button color="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
