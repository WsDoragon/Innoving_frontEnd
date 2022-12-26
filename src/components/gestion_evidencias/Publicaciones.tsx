import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "reactstrap";
import axios from "axios";
import EditPubModal from "./EditPubModal";
import FilesModal from "./FilesModal";

interface Publication {
  id: number;
  titulo: string;
  revista: string;
  indexacion: string;
  autores: string;
  anio: string;
  clasificacion: string;
  issnDoi: string;
  disciplina: string;
  autoresExtranjeros: boolean;
  validado: boolean;
}

export default function Publicaciones() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [currentPublication, setCurrentPublication] = useState<
    Publication | {}
  >({});

  useEffect(() => {
    axios.get("http://localhost:3001/api/pubs").then(({ data }) => {
      console.log(data.data);
      setPublications(data.data);
    });
  }, [currentPublication]);

  const openModal = (pub: Publication) => {
    setCurrentPublication(pub);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPublication({});
  };

  const showFiles = (pub: Publication) => {
    setIsFileModalOpen(true);
    setCurrentPublication(pub);
  };

  const hideFiles = () => {
    setIsFileModalOpen(false);
    setCurrentPublication({});
  };

  const formatDate = (date: string) => {
    const splitDate = date?.split("T")[0]?.split("-");
    return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
  };

  return (
    <Container>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Autores</th>
            <th>Titulo</th>
            <th>Revisa</th>
            <th>Indexación</th>
            <th>Fecha publicacion</th>
            <th>Autores Extranjeros</th>
            <th>Clasificación</th>
            <th>Disciplina</th>
            <th>ISSN/DOI</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {publications.map(
            ({
              id,
              titulo,
              revista,
              indexacion,
              anio,
              clasificacion,
              disciplina,
              autoresExtranjeros,
              autores,
              issnDoi,
              validado,
            }) => {
              return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{autores}</td>
                  <td>{titulo}</td>
                  <td>{revista}</td>
                  <td>{indexacion}</td>
                  <td>{formatDate(anio)}</td>
                  <td>{autoresExtranjeros ? "si" : "no"}</td>
                  <td>{clasificacion}</td>
                  <td>{disciplina}</td>
                  <td>{issnDoi}</td>

                  <td
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {validado === null ? (
                      <Button
                        color="success"
                        style={{ marginRight: "10px" }}
                        onClick={() =>
                          openModal({
                            id,
                            titulo,
                            revista,
                            indexacion,
                            anio,
                            clasificacion,
                            disciplina,
                            autoresExtranjeros,
                            autores,
                            issnDoi,
                            validado,
                          })
                        }
                      >
                        Validar
                      </Button>
                    ) : (
                      <Button disabled className="me-2">
                        Validado
                      </Button>
                    )}
                    <Button
                      color="info"
                      onClick={() =>
                        showFiles({
                          id,
                          titulo,
                          revista,
                          indexacion,
                          anio,
                          clasificacion,
                          disciplina,
                          autoresExtranjeros,
                          autores,
                          issnDoi,
                          validado,
                        })
                      }
                    >
                      Archivos
                    </Button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
      <EditPubModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        defaultValues={currentPublication}
      />
      <FilesModal
        isOpen={isFileModalOpen}
        closeModal={hideFiles}
        publication={currentPublication}
      />
    </Container>
  );
}
