import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Container,
} from "reactstrap";

import axios from "axios";
import Swal from "sweetalert2";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [inputFiles, setInputFiles] = useState<any | null>(null);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name && inputFiles) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", inputFiles);

      axios
        .post("http://localhost:3001/api/files", formData, {
          headers: { "Content-type": "multipart/form-data" },
        })
        .then(({ data }) => {
          if (!data.error)
            Swal.fire({
              title: "Archivo subido correctamente",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          else
            Swal.fire({
              title: "Error Interno",
              icon: "error",
              showConfirmButton: false,
              timer: 2000,
            });
        })
        .catch((e) => console.log(e));
    } else {
      Swal.fire({
        title: "Error al ingresar datos",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <Container>
      <h4 className="my-4">Subir Archivos</h4>

      <Form onSubmit={onSubmit}>
        <FormGroup row>
          <Label sm={2}>Nombre</Label>
          <Col sm={9}>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingresa el nombre del archivo"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Archivo</Label>
          <Col sm={9}>
            <Input
              id="archivo"
              name="archivo"
              type="file"
              onChange={(e) => setInputFiles((e as any)?.target?.files[0])}
              required
            />
          </Col>
        </FormGroup>

        <Button type="submit" color="primary">
          Subir
        </Button>
      </Form>
    </Container>
  );
};

export default UploadForm;
